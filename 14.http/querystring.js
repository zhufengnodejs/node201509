var querystring = require('querystring');
var obj = querystring.parse('name=zfpx&age=6');
console.log(obj);
var obj = querystring.parse('name@zfpx;age@6',';','@',{maxKeys:0});
console.log(obj);

console.log(querystring.stringify(obj,':','@'));