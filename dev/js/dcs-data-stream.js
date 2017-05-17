module.exports = function DCSdataStream(dataCallback, server, net) {

    function connect() {

        let buffer;
        let i;

        const client = net.createConnection({host: server.address, port: server.port}, () => {
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