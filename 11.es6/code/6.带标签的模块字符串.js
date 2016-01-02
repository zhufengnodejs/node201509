'use strict'

var name = 'zfpx';
var desc = 'good';
//var result = name + ' is '+desc;
upper` ${name} is ${desc} !`;

// ZFPX IS GOOD
function upper(strings,...values){
 console.log(strings);
 console.log(values);
 let result = '';
 for(var i=0;i<values.length;i++){
     result += strings[i].toUpperCase();
     result += values[i].toUpperCase();
 }
    result += strings[strings.length -1].toUpperCase();
 console.log(result);
}