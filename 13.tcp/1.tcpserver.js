var net = require('net');
var util = require('util');

//net.Socket 双工流 Duplux
var server = net.createServer({allowHalfOpen:true},function(socket){
  console.log(util.inspect(socket.address()));
  //查看当前连接数量
  server.getConnections(function(err,count){
      console.log(count);
  });
    socket.on('error',function(err){
        console.log(err);
        socket.destroy();
    });
    socket.on('close',function(err){
        console.log(err);
        socket.destroy();
    });
})
server.on('error',function(err){
  console.log(err);
});
server.listen(8089,function(){
  console.log(util.inspect(server.address()));
    setTimeout(function(){
        server.close();
    },3000)
});
server.on('close',function(err){
    console.log('服务器端正常关闭');
});