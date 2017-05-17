import websocket from "nodejs-websocket";
import geojson from "geojson";
import net from "net";

import DCSdataStream from "./js/dcs-data-stream"

/* SETUP ################################################################################################################### */
const _CLIENTS = 8081;                              // Notius-Server listen for clients on this port
const _DCS = { port: 3001, address: "127.0.0.1" }   // Notius-Server connects to the DCS Server on this port an address

/* ######################################################################################################################### */

/*
  WEBSOCKET SETUP
*/
let wsConnections = [];
const server = websocket.createServer(conn => {
  let t = new Date();
  console.log(t.getHours(),":", t.getMinutes(), ":", t.getSeconds(), " :: <- Client connected");
  wsConnections.push(conn);
  conn.on("close", function(code, reason) {
    wsConnections.splice(wsConnections.indexOf(conn), 1);
    t = new Date();
    console.log(t.getHours(),":", t.getMinutes(), ":", t.getSeconds(), " :: -> Client disconnected");
  });
});


/*
  Transmits data to all connected clients
*/
function ParseAndTransmit(data) {
  console.log(data)
  // let geoJSONData = toGeoJSON(dcsData);
  let geoJSONData = data;
   for (let connection in wsConnections)
     wsConnections[connection].sendText(JSON.stringify(geoJSONData));
}

/*
  DCSdataStream recieves data from DCS and passes it to the ParseAndTransmit function that parses it and sends it to the clients
*/
server.listen(_CLIENTS, () => {
  console.log(`#### NOTIUS-SERVER IS LISTENING FOR CLIENTS ON PORT ${_CLIENTS} ####`);
});
DCSdataStream(ParseAndTransmit, _DCS, net);
