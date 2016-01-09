var http = require('http');
http.createServer(function(req,res){
    console.log(req.headers);
  res.end('404');
    req.setEncoding('utf8');
  req.on('data',function(data){
     console.log(data);
  });
}).listen(8080);