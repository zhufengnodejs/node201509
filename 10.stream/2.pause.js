var fs = require('fs');
/**
 * 切换到流动模式的方法
 * 1. 添加data事件
 * 2. 调用resume方法
 * 3. pipe
 */
var rs = fs.createReadStream('128.txt',{});
rs.pause();//暂停读取数据并发射data事件
rs.on('data',function(data){
    console.log(data.length);
});
setTimeout(function(){
    rs.resume();//恢复读取数据并发射data事件
},5000)