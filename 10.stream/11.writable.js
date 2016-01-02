var Writable = require('stream').Writable;
var fs = require('fs');
var util = require('util');
util.inherits(ConsoleStream, Writable);

function ConsoleStream(path){
    this._path = path;
    this._fd = fs.openSync(this._path, "a");
    Writable.call(this);
}

ConsoleStream.prototype._write = function(data,encoding,callback){
    console.log(data.toString());
    var len = fs.writeSync(this._fd, data, 0, data.length);
    console.log("len :", len);
    callback();
}
ConsoleStream.prototype.end = function(){
    this.end.call(this);
    fs.closeSync(this._fd);
}


var zf = new ConsoleStream('./test.txt');
zf.write('珠峰','utf8',function(){
    console.log('珠峰写入完毕');
    zf.write('培训','utf8',function(){
        console.log('培训写入完毕');
    });
});