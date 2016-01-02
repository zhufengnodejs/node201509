var http = require('http');
http.createServer(function(req,res){
  req.on('data',function(data){
     console.log(data.toString());
  });
}).listen(8080);