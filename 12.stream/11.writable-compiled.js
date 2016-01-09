'use strict';

var Writable = require('stream').Writable;
var util = require('util');
var fs = require('fs');
function FsWritable(options) {
    Writable.call(this, options);
    this._fd = fs.openSync(options.path, 'r');
    this._highWaterMark = options.highWaterMark;
}
util.inherits(FsWritable, Writable);

FsWritable.prototype._write = function (data, encoding, callback) {};

var fsWritable = new FsWritable({ path: './write.txt' });
fsWritable.write(new Buffer('珠峰'), function () {
    fsWritable.write(new Buffer('培训'), function () {
        console.log('写入成功');
    });
});

//# sourceMappingURL=11.writable-compiled.js.map