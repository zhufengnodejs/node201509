/**
 *
 */
var fs = require('fs');
var rs = fs.createReadStream('128.txt',{highWaterMark:128*1024,autoClose:false});
rs.setEncoding('utf8');
rs.on('open',function(){
 console.log('文件被打开了');
});
rs.on('error',function(err){
 console.log('出错了',err);
});
//当读到数据的时候，调用回调函数
rs.on('data',function(data){
 console.log(data.length);
});

rs.on('end',function(){
 console.log('全部读取完毕');

});
rs.on('close',function(){
 console.log('文件被关闭了');
});