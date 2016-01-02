'use strict'

let name = 'zfpx';
let desc = 'good';
let words = `${name} is ${desc}`;
console.log(words.startsWith(name));
console.log(words.endsWith(desc));
console.log(words.includes('is1'));