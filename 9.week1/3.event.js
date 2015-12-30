var EventEmiiter = require('events');
var util = require('util');
/**
 * 小猪 观察者
 * 小马 观察者
 *
 * 前台 主题 对象
 **/

function Person(name){
    this.name= name;
    var self = this;
    this.change = function(){
        console.log(self.name,'接着工作');
    }
}

util.inherits(Person,EventEmiiter);
var front = new Person('前台');
var pig = new Person('小猪');
var horse = new Person('小马');
front.on('boss',pig.change);//注册监听
front.on('boss',horse.change);
front.emit('boss');//发射事件
