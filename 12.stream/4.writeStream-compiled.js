'use strict';

var fs = require('fs');
var rs = fs.createReadStream('./read.txt');
var ws = fs.createWriteStream('./write.txt', {
    autoClose: true
});
ws.on('open', function () {
    console.log('写入文件已经打开');
});
rs.on('data', function (data) {
    ws.write(data);
});
rs.on('end', function () {
    ws.end('写入完成', function () {
        console.log('写入完毕');
        console.log('共写入%d字节', ws.bytesWritten);
    });
});

ws.on('close', function () {
    console.log('文件关闭');
});

//# sourceMappingURL=4.writeStream-compiled.js.map