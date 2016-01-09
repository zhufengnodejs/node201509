var fs = require('fs');
var rs  = fs.createReadStream('./read.txt',{
    start:0,end:1,highWaterMark:2
})
rs.on('readable',function(){
    console.log('=====readable=====');
    var buff;
    while(null != (buff = rs.read(1))){
      var char =   buff[0];

    }
});

rs.on('end',function(){

});