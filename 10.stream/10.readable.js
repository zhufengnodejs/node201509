/**
 *做一个计数器，传入一个最大值。
 * 然后每次能读到一个数，累加到最大值
 *
 */
var Readable = require('stream').Readable;
var util = require('util');
util.inherits(Counter, Readable);
function Counter(max,options){
  Readable.call(this,options);
  this._max = max;
  this._index = 0;
}

Counter.prototype._read = function(){
  if(this._index++<this._max){
        this.push(new Date());//往读取队列中写入数据,并射data事件
  }else{
        this.push(null);//已经写入完毕了
  }
}

var counter = new Counter(10,{objectMode:true});
counter.setEncoding('utf8');
counter.on('data',function(data){
    console.log(data);
});
counter.on('end',function(){
    console.log('over');
});

