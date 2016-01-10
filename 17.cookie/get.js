'use strict'
class Document{
    constructor(){
        this.cookies = [];
    }
    set cookie(cookie){
        this.cookies.push(cookie);
    }
    get cookie(){
        return this.cookies.join('; ');
    }
}
var document = new Document();
document.cookie = "name=zfpx";
document.cookie = "age=zfpx";
console.log(document.cookie);