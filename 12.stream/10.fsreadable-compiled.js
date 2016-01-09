'use strict';

var Readable = require('stream').Readable;
var util = require('util');
var fs = require('fs');
function FsReadable(options) {
    Readable.call(this, options);
    this._fd = fs.openSync(options.path, 'r');
    this._highWaterMark = options.highWaterMark;
}
util.inherits(FsReadable, Readable);

FsReadable.prototype._read = function () {
    var buffer = new Buffer(this._highWaterMark);
    var bytesRead = fs.readSync(this._fd, buffer, 0, this._highWaterMark);
    if (bytesRead > 0) {
        this.push(buffer.slice(0, bytesRead));
    } else {
        this.push(null);
    }
};

var fsReadable = new FsReadable({ path: './read.txt', highWaterMark: 3 });
fsReadable.on('data', function (data) {
    console.log(data.toString());
});
fsReadable.on('end', function () {
    console.log('end');
});

//# sourceMappingURL=10.fsreadable-compiled.js.map