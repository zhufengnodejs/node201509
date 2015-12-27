var fs = require('fs');
var list = [];

fs.open('line.txt','r',function(err,fd){
    var pos =0;
    function read(){
        var buffer = new Buffer(3);
        fs.read(fd,buffer,0,3,pos,function(err,bytesRead){
            list.push(buffer.slice(0,bytesRead));
            pos += bytesRead;
            if(bytesRead>0)
                read();
            else{
                var result = Buffer.concat(list);
                console.log(result.toString());
            }
        });
    }
    read();
});

console.log('ddd');