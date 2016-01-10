var crypto = require('crypto');
function sha1(str){
    return crypto.createHash('sha1').update(str).digest('hex');
}
console.log(sha1(""));
console.log(sha1("1"));
console.log(sha1("11"));