var p = require('./person');
//var json = require('./json');
/**
 *
 */
var fs = require('fs');
var result = fs.readFileSync('json.json','utf8');
var json = JSON.parse(result);


console.log(p);
console.log(json);

console.trace();