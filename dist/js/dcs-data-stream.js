'use strict';

module.exports = function DCSdataStream(dataCallback, server, net) {

    function connect() {

        var buffer = void 0;
        var i = void 0;

        var client = net.createConnection({ host: server.address, port: server.port }, function () {
            var t = new Date();
            console.log(t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds() + ' :: Connected to DCS server!');
            buffer = "";
        });

        client.on('data', function (data) {
            buffer += data;
            while ((i = buffer.indexOf("\n")) >= 0) {
                var parsedData = JSON.parse(buffer.substring(0, i));
                dataCallback(parsedData);
                buffer = buffer.substring(i + 1);
            }
        });

        client.on('close', function () {
            var t = new Date();
            console.log(t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds() + ' :: Disconnected from DCS server!');
        });

        client.on('error', function () {
            connect();
        });
    }

    connect();
};