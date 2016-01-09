'use strict';

var net = require('net');
var util = require('util');
var fs = require('fs');
//net.Socket 双工流 Duplux
var ws = fs.createWriteStream('./socket.txt');
var server = net.createServer({ allowHalfOpen: true }, function (socket) {
  console.log(util.inspect(socket.address()));
  socket.pipe(ws, { end: false });
  socket.on('end', function () {
    ws.end('再见');
    socket.unpipe(ws);
  });
});
server.on('error', function (err) {
  console.log(err);
});
server.listen(8089, function () {
  console.log(util.inspect(server.address()));
});

//# sourceMappingURL=3.tcpsocket-compiled.js.map