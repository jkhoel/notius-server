import express from "express";
import websocket from "nodejs-websocket";
import geojson from "geojson";
import net from "net";

import DCSdataStream from "./js/dcs-data-stream";

/* SETUP #################################################################################### */
const _port = 3000; // Notius-Server will listen for clients on this port
const _server = 8081; // Notius-Server will connect to the DCS server on this port

/* ########################################################################################## */

const app = express();

app.listen(_port, () => {
  console.log(`#### NOTIUS-SERVER IS RUNNING -> Port ${_port} ####`);
});

let wsConnections = [];
const server = websocket.createServer(conn => {
  let t = new Date();
  console.log(
    t.getHours(),
    ":",
    t.getMinutes(),
    ":",
    t.getSeconds(),
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
});

// Transmits data to all connected clients
function transmitData(dcsData) {
  // let geoJSONData = toGeoJSON(dcsData);
  // for (let connection in wsConnections)
  //   wsConnections[connection].sendText(JSON.stringify(geoJSONData));
}

// DCSdataStream recieves data from DCS and passes it to the transmitData function that parses it and sends it to the clients
server.listen(_server);
DCSdataStream(transmitData, net);
