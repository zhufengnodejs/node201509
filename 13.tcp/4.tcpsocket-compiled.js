'use strict';

var net = require('net');
var util = require('util');
var fs = require('fs');
//net.Socket 双工流 Duplux
var ws = fs.createWriteStream('./socket.txt');
var server = net.createServer({ allowHalfOpen: true }, function (socket) {
  socket.setTimeout(10 * 1000);
  socket.on('timeout', function () {
    socket.resume();
    socket.pipe(ws, { end: false });
    ws.write(socket.remoteAddress);
  });
});
server.on('error', function (err) {
  console.log(err);
});
server.listen(8089, function () {
  console.log(util.inspect(server.address()));
});

//# sourceMappingURL=4.tcpsocket-compiled.js.map