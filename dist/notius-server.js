"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _nodejsWebsocket = require("nodejs-websocket");

var _nodejsWebsocket2 = _interopRequireDefault(_nodejsWebsocket);

var _geojson = require("geojson");

var _geojson2 = _interopRequireDefault(_geojson);

var _net = require("net");

var _net2 = _interopRequireDefault(_net);

var _dcsDataStream = require("./js/dcs-data-stream");

var _dcsDataStream2 = _interopRequireDefault(_dcsDataStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* SETUP #################################################################################### */
var _port = 3000; // Notius-Server will listen for clients on this port
var _server = 8081; // Notius-Server will connect to the DCS server on this port

/* ########################################################################################## */

var app = (0, _express2.default)();

app.listen(_port, function () {
  console.log("#### NOTIUS-SERVER IS RUNNING (Port " + _port + ") ####");
});

var wsConnections = [];
var server = _nodejsWebsocket2.default.createServer(function (conn) {
  var t = new Date();
  console.log(t.getHours(), ":", t.getMinutes(), ":", t.getSeconds(), " :: <- Client connected");
  wsConnections.push(conn);
  conn.on("close", function (code, reason) {
    wsConnections.splice(wsConnections.indexOf(conn), 1);

    t = new Date();
    console.log(t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + " :: -> Client disconnected");
  });
});

// Transmits data to all connected clients
function transmitData(dcsData) {}
// let geoJSONData = toGeoJSON(dcsData);
// for (let connection in wsConnections)
//   wsConnections[connection].sendText(JSON.stringify(geoJSONData));


// DCSdataStream recieves data from DCS and passes it to the transmitData function that parses it and sends it to the clients
server.listen(_server);
(0, _dcsDataStream2.default)(transmitData, _net2.default);