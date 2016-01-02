var fs = require('fs');
var util = require('util');
var PassThrough = require('stream').PassThrough;
fs.createReadStream('./password.txt')
    .pipe(new PassThrough())
    .pipe(fs.createWriteStream('./password-through.txt')
)