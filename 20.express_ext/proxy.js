/**
 * 反向代理
 */

var express = require('express');
//var proxy = require('http-proxy').createProxyServer();

var app = express();
function proxy(req,res,config){

}

function proxyPass(config){
    return function(req,res,next){
       var target = config[req.hostname];
        proxy(req,res,{
            target:target
        });
    }
}
app.use(proxyPass({
    "a.zfpx.cn":"http://localhost:3000",
    "b.zfpx.cn":"http://localhost:4000"
}));


app.listen(80);
//应用服务器A a.zfpx.cn
var app3000 = express();
app3000.get('/',function(req,res){
  res.end('3000');
});
app3000.listen(3000);

//应用服务器B b.zfpx.cn
var app4000 = express();
app4000.get('/',function(req,res){
    res.end('4000');
});
app4000.listen(4000);