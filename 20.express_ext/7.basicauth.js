var http = require('http');

http.createServer(function(req,res){
   var auth = req.headers['authorization'];
   if(auth){
    var area = auth.slice(6);
    var parts = new Buffer(area,'base64').toString().split(':');
    if(parts[0] == parts[1]){
        res.end('welcome');
    }else{
        res.setHeader('WWW-Authenticate','Basic realm="Secure Area"');
        res.writeHead(401);
        return res.end();
    }
   }else{
       res.setHeader('WWW-Authenticate','Basic realm="Secure Area"');
       res.writeHead(401);
       return res.end();
   }
    if(req.url != '/favicon.ico'){
        res.end(req.url);
    }else{
        res.end('404');
    }
}).listen(8080);