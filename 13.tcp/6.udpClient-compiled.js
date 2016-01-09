'use strict';

var dgram = require('dgram');
var socket = dgram.createSocket('udp4');
socket.on('message', function (msg, rinfo) {
    console.log(msg.toString());
    console.log(rinfo);
});
socket.send(new Buffer('珠峰培训'), 0, 6, 41234, 'localhost', function (err, bytes) {
    console.log('发送了个%d字节', bytes);
});

//# sourceMappingURL=6.udpClient-compiled.js.map