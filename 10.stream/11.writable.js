var Writable = require('stream').Writable;
var util = require('util');
util.inherits(ConsoleStream, Writable);

function ConsoleStream(path){
    this._path = path;
    Writable.call(this);
}

ConsoleStream.prototype._write = function(data,encoding,callback){
    console.log(data.toString());
    callback();
}

var zf = new ConsoleStream('./test.txt');
zf.write('珠峰','utf8',function(){
    console.log('珠峰写入完毕');
    zf.write('培训','utf8',function(){
        console.log('培训写入完毕');
    });
});