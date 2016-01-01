var util = require('util');
var EventEmitter = require('events');
function Person(){

}
util.inherits(Person,EventEmitter);
// Object.setPrototypeOf(ctor.prototype, superCtor.prototype);
//第一个参数是要继承的原型
Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
};

var b=Object.create(a);


function Car (desc) {
    this.desc = desc;
    this.color = "red";
}

Car.prototype = {
    getInfo: function() {
        return 'A ' + this.color + ' ' + this.desc + '.';
    }
};
//instantiate object using the constructor function
var car =  Object.create(Car.prototype);
car.color = "blue";
alert(car.getInfo());
