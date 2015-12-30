var http = require('http');
http.createServer(function(req,res){
    console.log('接收请求');
    setTimeout(function(){
        console.log('红烧鱼做好了，吃吧');
        res.end('over');
    },10000*1000);
}).listen(9999);