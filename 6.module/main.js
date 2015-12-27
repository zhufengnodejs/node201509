var a = require('./a');
var b = require('./b');
a.loaded();
b.loaded();

console.log(module.children);