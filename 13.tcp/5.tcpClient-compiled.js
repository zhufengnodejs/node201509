'use strict';

var net = require('net');
var util = require('util');

var socket = new net.Socket({ allowHalfOpen: true });
socket.setEncoding('utf8');

socket.connect(8089, 'localhost', function () {
  socket.write('hello');
  socket.on('data', function (data) {
    console.log(data);
  });
});

//# sourceMappingURL=5.tcpClient-compiled.js.map