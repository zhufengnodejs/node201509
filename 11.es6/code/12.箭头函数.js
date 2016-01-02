'use strict'

let say = name => name;
console.log(say('hello'));

let say2 = (name,words) => `${name} say ${words}`;

console.log(say2('zfpx','hello'));

let say3 = (name,words) => {
    var a = 1;
    var b = 2;
    return  `${name} say ${words} ${a}`;
}
console.log(say3('zfpx','hello'));
