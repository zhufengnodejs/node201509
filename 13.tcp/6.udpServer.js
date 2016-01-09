var dgram = require('dgram');
var socket = dgram.createSocket('udp4');
socket.on('message',function(msg,rinfo){
  console.log(msg.toString());
  console.log(rinfo);
   socket.send(msg,0,msg.length,rinfo.port,rinfo.address);
});
socket.bind(41234,'localhost');
