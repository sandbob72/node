var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;
let answer = Math.floor(Math.random() * 5);
var count = 0;

net.createServer(function(sock) {
   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   sock.on('data', function(data) {
       if(count==0){
        count++
           sock.write('"' + data + '" OK');
           
       }
       else if(count==10){
           sock.write('END')
           sock.end()   
       }
       else if(data == answer){
           sock.write('BINGO')
           sock.end() 
       }
       else{
        count++
        sock.write('WRONG')
        
       }
       
   });

   sock.on('close', function(data) {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
   });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);