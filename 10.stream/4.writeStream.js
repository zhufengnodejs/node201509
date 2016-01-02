var fs = require('fs');
var src = fs.createReadStream('src.txt');
var dest = fs.createWriteStream('dest.txt');

src.on('data',function(data){
    dest.write(data);
});
src.on('end',function(){
    dest.end('再见',function(){
        console.log('全部写入完毕');
        console.log('共写入%d个字节',dest.bytesWritten);
    });
});