'use strict';

var mime = require('mime');
var http = require('http');
var util = require('util');
var url = require('url');
var fs = require('fs');
var path = require('path');
var formidable = require('formidable');
var querystring = require('querystring');
var successCount = 0;
var app = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if (pathname == '/') {
        fs.createReadStream('./index.html').pipe(res);
    } else if (pathname == '/post') {
        var parser = new formidable.IncomingForm();
        parser.parse(req, function (err, fields, files) {
            var filename = fields.name;
            var total = fields.total;
            var index = fields.index;
            var size = fields.size;

            var src = fs.createReadStream(files.data.path);
            var target = fs.createWriteStream(filename + '.' + index);
            target.on('close', function () {
                console.log(index);
                if (successCount == total - 1) {
                    //var fd = fs.openSync(filename,'a');
                    var files = fs.readdirSync('.');
                    files.forEach(function (file) {
                        if (file.startsWith(filename + '.')) {
                            var pos = (Number(path.extname(file).slice(1)) - 1) * size;
                            /*var buff = fs.readFileSync(file);
                            console.log('fd',fd,buff.length,pos);
                            fs.writeSync(fd,buff,0,buff.length,pos);
                            fs.unlinkSync(file);*/
                            fs.createReadStream(file).pipe(fs.createWriteStream(filename, { start: pos, flags: 'a' }));
                            fs.unlinkSync(file);
                        }
                    });
                    //fs.closeSync(fd);
                    successCount = 0;
                } else {
                    successCount++;
                }
            });
            src.pipe(target);
            res.end('ok');
        });
    } else {
        res.end('404');
    }
}).listen(8080);

//# sourceMappingURL=server-compiled.js.map