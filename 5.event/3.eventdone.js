var EventEmitter = require('events');

var eve = new EventEmitter();

var fs = require('fs');
var person = {};
eve.on('data',out);
fs.readFile('name.txt','utf8',function(err,data){
    person.name = data;
    eve.emit('data');
})
fs.readFile('age.txt','utf8',function(err,data){
    person.age = data;
    eve.emit('data');
})

function out(){
    if(person.name && person.age)
        console.log(person.name,person.age);
}