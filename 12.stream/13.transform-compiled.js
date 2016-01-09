'use strict';

var Transform = require('stream').Transform;
var util = require('util');
var fs = require('fs');
function FsTransform(options) {
    Transform.call(this, options);
}
util.inherits(FsTransform, Transform);

FsTransform.prototype._transform = function (data, encoding, callback) {
    for (var i = 0; i < data.length; i++) {
        data[i] = 255 - data[i];
    }
    this.push(data); //放置到读取队列中
    this.push(null);
};

//255-(255-i) = i
/**
fs.createReadStream('./read.txt').pipe(new FsTransform())
.pipe(fs.createWriteStream('./after.txt'))
**/

fs.createReadStream('./after.txt').pipe(new FsTransform()).pipe(fs.createWriteStream('./after2.txt'));

//# sourceMappingURL=13.transform-compiled.js.map