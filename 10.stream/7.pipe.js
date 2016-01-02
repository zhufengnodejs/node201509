var fs = require('fs');
var src = fs.createReadStream('big.fbr');
var dest = fs.createWriteStream('big3.fbr');
src.pipe(dest);