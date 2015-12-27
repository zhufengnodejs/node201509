var fs = require('fs');
var buffer = new Buffer(100000);
fs.open('line.txt','r',function(err,fd){
    fs.read(fd,buffer,0,6,0,function(err,bytesRead){
        console.log('bytesRead',bytesRead);
        fs.read(fd,buffer,6,6,6,function(err,bytesRead){
            console.log('bytesRead',bytesRead);
            console.log(buffer.toString());
        })
    })
});

