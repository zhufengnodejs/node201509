'use strict';

var fs = require('fs');
var ws = fs.createWriteStream('./test.txt', {
    highWaterMark: 16
}); // 16k
writeMillion(ws, 'data', 'utf8', function () {});
function writeMillion(writer, data, encoding, callback) {
    var i = 1000000;
    write();
    function write() {
        var ok = true;
        do {
            i -= 1;
            if (i == 0) {
                writer.write(data, encoding, callback);
            } else {
                ok = writer.write(data, encoding);
                console.log(ok);
            }
        } while (i > 0 && ok);
        if (i > 0) {
            writer.once('drain', write);
        }
    }
}

//# sourceMappingURL=6.drain-compiled.js.map