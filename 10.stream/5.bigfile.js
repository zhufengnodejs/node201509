
var fs = require('fs');
var src = fs.createReadStream('big.fbr');
var dest = fs.createWriteStream('big2.fbr');
var last = true;
src.on('data',function(data){
    var flag = dest.write(data);
    if(last != flag){
        console.log(flag);
        last = flag;
    }
});
//当可写流里的缓存区全部写入目标文件里的时候触发
dest.on('drain',function(){
    console.log('drain');
});
