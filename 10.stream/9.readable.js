/**
 *做一个计数器，传入一个最大值。
 * 然后每次能读到一个数，累加到最大值
 *
 */
var Readable = require('stream').Readable;
var util = require('util');
util.inherits(Counter, Readable);
//Object.setPrototypeOf(ctor.prototype, superCtor.prototype);
//ctor的原型(prototype)等于父类构造函数的new出来的一个实例
//Counter.prototype = Readable.prototype;
//Counter.prototype = new Readable();
//Counter.prototype = Object.create(Readable.prototype);
//console.log(counter.__proto__.__proto__==Readable.prototype);

function Counter(max,options){
  Readable.call(this,options);
  this._max = max;
  this._index = 0;
}

Counter.prototype._read = function(){
  if(this._index++<this._max){
        this.push(new Buffer(String(this._index)));//往读取队列中写入数据,并射data事件
  }else{
        this.push(null);//已经写入完毕了
  }
}

var counter = new Counter(10);
counter.setEncoding('utf8');
counter.on('data',function(data){
    console.log(data);
});
counter.on('end',function(){
    console.log('over');
});

