var net = require('net');
var HOST = 'coc.waterphuket.com';
var PORT = 6969;
var a = 0
var c = 0
var client = new net.Socket();
client.connect(PORT, HOST, function () {
    client.write('sandbob');
    console.log('connect');
    
});
client.on('data', function (data) {
    client.write(a.toString());
    console.log('DATA: ' + data);
    if (data.toString().trim() == 'BINGO') {
        
        client.destroy()
    }
    else if( c== 5){
        c=0
        a+=5
    }
   a++
   c++
});

// Add a 'close' event handler for the client socket
client.on('close', function () {
    console.log('Connection closed');
});
