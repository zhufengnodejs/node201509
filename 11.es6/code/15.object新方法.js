'use strict'
var util =  require('util');
var a = "abc";
var b = parseInt(a);
console.log(b === NaN);
console.log(Object.is(b,NaN));
//赋值
var p = {};
var opp = {name:'opp'};
var op = {name:opp};
Object.assign(p,op,{age:7});
console.log(p);
util.inspect(p);
opp.name = 'opp2';
console.log(p);

