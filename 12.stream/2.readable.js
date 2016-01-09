var fs = require('fs');
var rs  = fs.createReadStream('./read.txt',{
    start:0,end:1,highWaterMark:2
})
var buffers = [];
rs.on('readable',function(){
    console.log('=====readable=====');
    var buff;
    while(null != (buff = rs.read(1))){
        buffers.push(buff);
    }
});

rs.on('end',function(){
   var data = Buffer.concat(buffers);
   console.log(data.toString());// 123456
});