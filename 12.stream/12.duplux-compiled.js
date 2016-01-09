'use strict';

var Duplex = require('stream').Duplex;
var util = require('util');
var fs = require('fs');
function FsDuplex(options) {
    Duplex.call(this, options);
}
util.inherits(FsDuplex, Duplex);

FsDuplex.prototype._read = function () {
    //this.push(new Buffer('xxx'));
    //this.push(null);
};

FsDuplex.prototype._write = function (data, encoding, callback) {
    for (var i = 0; i < data.length; i++) {
        data[i] = 255 - data[i];
    }
    this.push(data); //放置到读取队列中
    //this.push(null);
};

//255-(255-i) = i

fs.createReadStream('./read.txt').pipe(new FsDuplex()).pipe(fs.createWriteStream('./after.txt'));

/*
fs.createReadStream('./after.txt').pipe(new FsDuplex())
    .pipe(fs.createWriteStream('./after2.txt'))
*/

//# sourceMappingURL=12.duplux-compiled.js.map