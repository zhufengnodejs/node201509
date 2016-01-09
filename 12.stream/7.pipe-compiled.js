'use strict';

var fs = require('fs');
var rs = fs.createReadStream('read.txt'); //64k
var ws = fs.createWriteStream('write.txt'); // 16k
rs.pipe(ws);

rs.on('data', function (data) {
    var flag = ws.write(data);
    if (!flag) {
        rs.pause();
    }
});

ws.on('drain', function () {
    rs.resume();
});

//# sourceMappingURL=7.pipe-compiled.js.map