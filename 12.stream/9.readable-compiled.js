'use strict';

var Readable = require('stream').Readable;
var util = require('util');
function Counter(options) {
    Readable.call(this, options);
    this._index = 0;
    this._max = options.max;
}
util.inherits(Counter, Readable);

Counter.prototype._read = function () {
    if (this._index++ < this._max) {
        this.push("" + this._index);
    } else {
        this.push(null);
    }
};

var counter = new Counter({ max: 10 });
counter.on('data', function (data) {
    console.log(data.toString());
});
counter.on('end', function () {
    console.log('end');
});

//# sourceMappingURL=9.readable-compiled.js.map