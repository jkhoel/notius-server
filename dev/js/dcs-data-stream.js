module.exports = function DCSdataStream(dataCallback, net) {

    const PORT = 3001;
    const ADDRESS = "127.0.0.1";

    //const net = require('net');

    let buffer;
    let i;

    function connect() {

        const client = net.createConnection({host: ADDRESS, port: PORT}, () => {
            let t = new Date();
            console.log(t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds() + ' :: Connected to DCS server!');
            buffer = "";
        });

        client.on('data', (data) => {
            buffer += data;
            while ((i = buffer.indexOf("\n")) >= 0) {
                let parsedData = JSON.parse(buffer.substring(0, i));
                dataCallback(parsedData);
                buffer = buffer.substring(i + 1);
            }
        });

        client.on('close', () => {
            let t = new Date();
            console.log(t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds() + ' :: Disconnected from DCS server!');
        });

        client.on('error', () => {
            connect();
        });
    }

    connect();
};