

var fs = require('fs');
var person = {};
var count = 0;
fs.readFile('name.txt','utf8',function(err,data){
    person.name = data;
    if(++count ==2){
        out();
    }
})
fs.readFile('age.txt','utf8',function(err,data){
    person.age = data;
    if(++count ==2){
        out();
    }
})

function out(){
    console.log(person.name,person.age);
}