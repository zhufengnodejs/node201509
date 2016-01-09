var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var util = require('util');
///r/n 0x0d 0x0a
var RETURN= 0x0d; // ascii \r       十六进制的d就等于十进制的13  回车 return 移动光标到该行的起始位置
var NEWLINE = 0x0a; // ascii  \n   十六进制的a等于十进制的10 换行 newline 换行至下一行行首起始位置

function LineReader(path){
    this._rs = fs.createReadStream(path,'r');
}
util.inherits(LineReader,EventEmitter);

LineReader.prototype.on('newListener',function(name,func){

});

var reader = new LineReader('./1.txt');
reader.on('newLine',function(data){
    console.log(data);
});
reader.on('end',function(){
    console.log('end');
});