import websocket from "nodejs-websocket";
import GeoJSON from "geojson";
import net from "net";

import DCSdataStream from "./js/dcs-data-stream";
import Utility from "./js/utility";

/* SETUP ################################################################################################################### */
const _CLIENTS = 8081; // Notius-Server listen for clients on this port
const _DCS = { port: 3001, address: "127.0.0.1" }; // Notius-Server connects to the DCS Server on this port an address

/* ######################################################################################################################### */

/*
  WEBSOCKET SETUP
*/
let wsConnections = [];
const server = websocket.createServer(conn => {
  let t = new Date();
  console.log(
    t.getHours() +
      ":" +
      t.getMinutes() +
      ":" +
      t.getSeconds() +
      " :: <- Client connected"
  );
  wsConnections.push(conn);
  conn.on("close", function(code, reason) {
    wsConnections.splice(wsConnections.indexOf(conn), 1);
    t = new Date();
    console.log(
      t.getHours() +
        ":" +
        t.getMinutes() +
        ":" +
        t.getSeconds() +
        " :: -> Client disconnected"
    );
  });
  conn.on("error", function(error) {
    console.log("::: ERROR: ", error);
  });
});

/*
  CLASS: Unit -> Defines an object of type unit with the attributes we would expect a DCS unit to have
 */
class Unit {
  static parse(data) {
    let track = new Date();
    track =
      "TR" +
      ("0" + track.getMinutes()).slice(-2) +
      ("0" + track.getMilliseconds()).slice(-2);

    let unit = new Unit();
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

  static sidc(type) {}

  constructor() {
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
}

/*
  FUNCTION: DataParser() -> Parse the datastream and return a collection of markers as a geoJSON object
*/
const DataParser = data => {
  let featureCollection = [];
  let _all = data.blue.concat(data.red);

  _all.forEach(element => {
    let unit = Unit.parse(element);
    //console.log(unit.type, "(", unit.x, unit.y, ") ");

    // Add unit to the feature collection
    featureCollection.push({
      lat: unit.x,
      lon: unit.y,
      alt: Utility.metersToFL(unit.z),
      hdg: unit.hdg,
      speed: unit.speed,
      //monoColor: markerColor,
      //SIDC: _sidc + "***",
      //side: side,
      size: 30,
      source: "awacs",
      type: unit.type,
      name: Utility.trackNum(unit.callsign)
    });
  });

  let _json = GeoJSON.parse(featureCollection, { Point: ["lat", "lon"] });
  return _json;
};

/*
  FUNCTION: ParseAndTransmit() -> Transmits data to all connected clients
*/
const ParseAndTransmit = data => {
  let _collection = DataParser(data);
  for (let connection in wsConnections)
    wsConnections[connection].sendText(JSON.stringify(_collection));
};

/*
  Setup of client listener. Then DCSdataStream recieves data from DCS and passes it to the ParseAndTransmit function that parses it and sends it to the clients
*/
server.listen(_CLIENTS, () => {
  console.log(
    `#### NOTIUS-SERVER IS LISTENING FOR CLIENTS ON PORT ${_CLIENTS} ####`
  );
});
DCSdataStream(ParseAndTransmit, _DCS, net);
