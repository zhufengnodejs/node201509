
var zlib = require('zlib');
var fs = require('fs');
fs.createReadStream('./password.txt').pipe(zlib.createDeflate()).pipe(
    fs.createWriteStream('./password.gzip')
)