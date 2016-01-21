var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
//fs.readfileSync();
fs.readFileAsync("index.txt", "utf8").then(function(contents) {
    console.log(contents);
}).catch(function(e) {
    console.error(e.stack);
});
console.log('cc');