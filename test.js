var crypto = require('crypto');
function getHash(str){
    var shasum = crypto.createHash('sha1');
    return shasum.update(str).digest('hex');
}
//20字节
console.log(getHash("1").length/2);
console.log(getHash("1"));
console.log(getHash("1.ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"));