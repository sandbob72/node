var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var client = new net.Socket();
let stdin = process.openStdin()
var i = 1, name, id
client.connect(PORT, HOST, function () {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('5935512039');
    
});
client.on('data', function (data) {
    console.log('DATA: ' + data);
    // stdin.addListener("data", (volum) => {
        if (data === 'BINGO'||data === 'END') {
            client.destroy();
        }
        else{   
            client.write(""+i);
        }
        i++

    // });
    
});
// Add a 'close' event handler for the client socket
client.on('close', function () {
    console.log('Connection closed');
});