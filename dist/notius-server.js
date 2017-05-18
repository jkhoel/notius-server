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
  }

  return Unit;
}();

/*
  FUNCTION: DataParser() -> Parse the datastream and return a collection of markers as a geoJSON object
*/


var DataParser = function DataParser(data) {
  var featureCollection = [];
  var _all = data.blue.concat(data.red);

  _all.forEach(function (element) {
    var unit = Unit.parse(element);
    //console.log(unit.type, "(", unit.x, unit.y, ") ");

    // Add unit to the feature collection
    featureCollection.push({
      lat: unit.x,
      lon: unit.y,
      alt: _utility2.default.metersToFL(unit.z),
      hdg: unit.hdg,
      speed: unit.speed,
      //monoColor: markerColor,
      //SIDC: _sidc + "***",
      //side: side,
      size: 30,
      source: "awacs",
      type: unit.type,
      name: _utility2.default.trackNum(unit.callsign)
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