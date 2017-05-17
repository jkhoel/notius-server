"use strict";

var _nodejsWebsocket = require("nodejs-websocket");

var _nodejsWebsocket2 = _interopRequireDefault(_nodejsWebsocket);

var _geojson = require("geojson");

var _geojson2 = _interopRequireDefault(_geojson);

var _net = require("net");

var _net2 = _interopRequireDefault(_net);

var _dcsDataStream = require("./js/dcs-data-stream");

var _dcsDataStream2 = _interopRequireDefault(_dcsDataStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* SETUP ################################################################################################################### */
//import express from "express";
var _CLIENTS = 8081; // Notius-Server listen for clients on this port
var _DCS = { port: 3001, address: "127.0.0.1" }; // Notius-Server connects to the DCS Server on this port an address

/* ######################################################################################################################### */

// WEBSOCKET SETUP
var wsConnections = [];
var server = _nodejsWebsocket2.default.createServer(function (conn) {
  var t = new Date();
  console.log(t.getHours(), ":", t.getMinutes(), ":", t.getSeconds(), " :: <- Client connected");
  wsConnections.push(conn);
  conn.on("close", function (code, reason) {
    wsConnections.splice(wsConnections.indexOf(conn), 1);
    t = new Date();
    console.log(t.getHours(), ":", t.getMinutes(), ":", t.getSeconds(), " :: -> Client disconnected");
  });
});

/*
  Transmits data to all connected clients
*/
function ParseAndTransmit(data) {
  console.log(data);
  // let geoJSONData = toGeoJSON(dcsData);
  var geoJSONData = data;
  for (var connection in wsConnections) {
    wsConnections[connection].sendText(JSON.stringify(geoJSONData));
  }
}

// DCSdataStream recieves data from DCS and passes it to the ParseAndTransmit function that parses it and sends it to the clients
server.listen(_CLIENTS, function () {
  console.log("#### NOTIUS-SERVER IS LISTENING FOR CLIENTS ON PORT " + _CLIENTS + " ####");
});
(0, _dcsDataStream2.default)(ParseAndTransmit, _DCS, _net2.default);