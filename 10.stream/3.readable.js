
var fs = require('fs');
var rs = fs.createReadStream('128.txt',{});
var arr = [];
rs.on('readable',function(){
    console.log('====readable====');
    var data;
    /*while(null != (data = rs.read())){
        arr.push(data);
        console.log(data.length);
    }*/
});
rs.on('end',function(){
    var result = Buffer.concat(arr);
    console.log(result.length);
});