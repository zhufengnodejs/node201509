/**
 *
 */
'use strict';

var fs = require('fs');
var rs = fs.createReadStream('./read.txt', {
    start: 0, end: 5, highWaterMark: 3
});
rs.setEncoding('utf8');
rs.on('open', function () {
    console.log('打开文件');
});
rs.resume();
setTimeout(function () {
    rs.on('data', function (data) {
        //setTimeout(function(){
        console.log(data);
        /*    rs.pause();
         setTimeout(function(){
         rs.resume();
         },3000)*/
        //},5000)
    });
}, 5000);

rs.on('end', function () {
    console.log('读取完成');
});

rs.on('close', function () {
    console.log('文件关闭');
});

//# sourceMappingURL=1.readstream-compiled.js.map