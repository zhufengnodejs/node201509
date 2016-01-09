'use strict';

var EventEmitter = new require('events');
function Person() {}
require('util').inherits(Person, EventEmitter);
var p = new Person();
p.on('newListener', function (eventName, fn) {
    console.log(eventName);
    fn();
});
p.on('xx', function () {
    console.log('x');
});
p.on('yy', function () {});

//# sourceMappingURL=test-compiled.js.map