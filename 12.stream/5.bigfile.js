var fs = require('fs');
var rs  = fs.createReadStream('4.fbr');//64k
var ws = fs.createWriteStream('42.fbr');// 16k

rs.on('data',function(data){
    var flag = ws.write(data);
    console.log(flag);
});

ws.on('drain',function(){
    console.log('drain')
});

