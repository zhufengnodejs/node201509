'use strict'

let name = 'zfpx';
let age = 18;
let person = {
    name,
    age,
    say(){
        console.log(this.name);
    }
}
console.log(person);