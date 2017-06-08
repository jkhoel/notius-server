"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodejsWebsocket = require("nodejs-websocket");

var _nodejsWebsocket2 = _interopRequireDefault(_nodejsWebsocket);

var _geojson = require("geojson");

var _geojson2 = _interopRequireDefault(_geojson);

var _net = require("net");

var _net2 = _interopRequireDefault(_net);

var _dcsDataStream = require("./js/dcs-data-stream");

var _dcsDataStream2 = _interopRequireDefault(_dcsDataStream);

var _utility = require("./js/utility");

var _utility2 = _interopRequireDefault(_utility);

var _sidc2 = require("./js/sidc");

var _sidc3 = _interopRequireDefault(_sidc2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* SETUP ################################################################################################################### */
var _CLIENTS = 8081; // Notius-Server listen for clients on this port
var _DCS = { port: 3001, address: "127.0.0.1" }; // Notius-Server connects to the DCS Server on this port an address

/* ######################################################################################################################### */

/*
  WEBSOCKET SETUP
*/
var wsConnections = [];
var server = _nodejsWebsocket2.default.createServer(function (conn) {
  var t = new Date();
  console.log(t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + " :: <- Client connected");
  wsConnections.push(conn);
  conn.on("close", function (code, reason) {
    wsConnections.splice(wsConnections.indexOf(conn), 1);
    t = new Date();
    console.log(t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + " :: -> Client disconnected");
  });
  conn.on("error", function (error) {
    console.log("::: ERROR: ", error);
  });
});

/*
  CLASS: Unit -> Defines an object of type unit with the attributes we would expect a DCS unit to have
 */

var Unit = function () {
  _createClass(Unit, null, [{
    key: "parse",
    value: function parse(data) {
      var track = new Date();
      track = "TR" + ("0" + track.getMinutes()).slice(-2) + ("0" + track.getMilliseconds()).slice(-2);

      var unit = new Unit();
      unit.type = data[0];
      unit.x = data[1];
      unit.y = data[2];
      unit.z = data[3];
      unit.hdg = data[4];
      unit.speed = data[5];
      unit.callsign = data[6];
      unit.coalition = data[7];
      unit.name = track;

      return unit;
    }
  }, {
    key: "sidc",
    value: function sidc(type) {}
  }]);

  function Unit() {
    _classCallCheck(this, Unit);

    this.type = "";
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.hdg = 0;
    this.speed = 0;
    this.callsign = "";
    this.coalition = 0;
    this.name = "";
    this.sidc = "";
    this.observable = false;
    this.observer = "";
    this.distance = 0;
  }

  return Unit;
}();

/*
  FUNCTION: CheckObservable() -> Checks if the unit is within the radius of any enemy units. If so, it returns true
*/

// TODO: If a unit name is prefixed with OBSERVABLE_ then it should be added to the list no matter what
// TODO: Radius should be based off of the bluefor units sensor range
// TODO: Add a delay in order to simulate information passing trough the chain. Delay dependant on unit type (comms equipment) with RECON_ units having a shorter delay
// TODO: observer should allways be the closest unit

var CheckObservable = function CheckObservable(enemy, friendlyUnits, radius) {
  var state = {
    observable: false,
    observer: "",
    distance: 0
  };

  // For each friendlyUnit, check if the enemy unit is within the radius
  friendlyUnits.forEach(function (f) {
    // Based on the latitude of enemy, get the actual distances for 1deg of lat and long
    var lengths = _utility2.default.calcLatLonDistances(enemy.x);

    // Calculate deltas in meters
    var dX = (enemy.x - f.lat) * lengths.lat;
    var dY = (enemy.y - f.lon) * lengths.lon;
    var dZ = enemy.z - f.alt;

    var distance = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2) + Math.pow(dZ, 2));

    console.log(enemy.type + " :: Distance to " + f.type + " = " + distance + "(radius = " + radius + ")");
    //console.log("Distance in nm, Latitude (X):", dX / 1852 );
    //console.log("Distance in nm, Longitude (Y):", dY / 1852 );

    if (distance <= radius) {
      state.observable = true;
      state.observer = f.name;
      state.distance = distance;
    }
  });

  return state;
};

/*
  FUNCTION: DataParser() -> Parse the datastream and return a collection of markers as a geoJSON object
*/
var DataParser = function DataParser(data) {
  var featureCollection = [];
  var i = 0;

  var blueforCollection = [];
  var redforCollection = [];

  // BLUEFOR Collection
  data.blue.forEach(function (element) {
    var unit = Unit.parse(element);

    blueforCollection.push({
      type: unit.type,
      lat: unit.x,
      lon: unit.y,
      alt: unit.z,
      hdg: unit.hdg,
      speed: unit.speed,
      callsign: unit.callsign,
      name: unit.name,
      SIDC: "",
      monoColor: "",
      side: unit.coalition,
      size: 25,
      observable: true,
      observer: null,
      distance: null
    });
  });
  //console.log("BLUEFOR: ", bluefor);

  // REDFOR Collection
  data.red.forEach(function (element) {
    var unit = Unit.parse(element);
    var check = CheckObservable(unit, blueforCollection, 6000); // radius in meter

    console.log(unit.type, " => ", check.observable);

    // Add REDFOR unit to the collection if it is observable
    if (check.observable === true) {
      redforCollection.push({
        type: unit.type,
        lat: unit.x,
        lon: unit.y,
        alt: unit.z,
        hdg: unit.hdg,
        speed: unit.speed,
        callsign: unit.callsign,
        name: unit.name,
        SIDC: "",
        monoColor: "",
        side: unit.coalition,
        size: 25,
        observable: true,
        observer: check.observer,
        distance: check.distance
      });
    }
  });
  //console.log("REDFOR: ", redforCollection);

  var _all = blueforCollection.concat(redforCollection);
  _all.forEach(function (unit) {
    // Setup a default marker
    var _sidcObject = Object.assign({}, _sidc3.default["default"]);
    var side = "0";
    var markerColor = "rgb(252, 246, 127)";

    // OPTION: [COMMENT TO TURN OFF] If the unit type is in the list, return an accurate marker
    if (_sidc3.default[unit.type]) _sidcObject = Object.assign(_sidcObject, _sidc3.default[unit.type]);

    // OPTION: [COMMENT TO TURN OFF] SHOW AFFILIATION
    if (unit.side === 1) {
      side = "1";
      markerColor = "rgb(255, 88, 88)";
      _sidcObject["affiliation"] = "H";
    }

    if (unit.side === 2) {
      side = "2";
      markerColor = "rgb(128, 224, 255)";
      _sidcObject["affiliation"] = "F";
    }

    // OPTION: [COMMENT TO TURN OFF] HIDE UNIT TYPE/FUNCTION
    //_sidcObject["functionID"] = '-----';

    // Generate final SIDC string
    var _sidc = "";
    for (var atr in _sidcObject) {
      _sidc += _sidcObject[atr];
    }

    // Add unit to the feature collection
    featureCollection.push({
      type: unit.type,
      lat: unit.lat,
      lon: unit.lon,
      alt: _utility2.default.metersToFL(unit.z),
      hdg: unit.hdg,
      speed: unit.speed,
      callsign: unit.callsign,
      name: unit.name,
      SIDC: _sidc + "***",
      monoColor: markerColor,
      side: side,
      size: 25,
      observer: unit.observer,
      distance: unit.distance
    });
  });

  var _json = _geojson2.default.parse(featureCollection, { Point: ["lat", "lon"] });
  return _json;
};

/*
  FUNCTION: ParseAndTransmit() -> Transmits data to all connected clients
*/
var ParseAndTransmit = function ParseAndTransmit(data) {
  var _collection = DataParser(data);
  for (var connection in wsConnections) {
    wsConnections[connection].sendText(JSON.stringify(_collection));
  }
};

/*
  Setup of client listener. Then DCSdataStream recieves data from DCS and passes it to the ParseAndTransmit function that parses it and sends it to the clients
*/
server.listen(_CLIENTS, function () {
  console.log("#### NOTIUS-SERVER IS LISTENING FOR CLIENTS ON PORT " + _CLIENTS + " ####");
});
(0, _dcsDataStream2.default)(ParseAndTransmit, _DCS, _net2.default);