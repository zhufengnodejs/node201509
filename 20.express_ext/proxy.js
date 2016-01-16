/**
 * 反向代理
 */

var express = require('express');
//var proxy = require('http-proxy').createProxyServer();
var request = require('request');
var acluster = ["http://localhost:3000","http://localhost:3001"];
var aliveACluster = ["http://localhost:3000","http://localhost:3001"];;
var app = express();
setInterval(function(){

},60*1000*5);
function proxy(req,res,targets){
    function next(){
        var current = targets[0];
        console.log(current);
        request(current, function (error, response, body) {
            if (!error && response.statusCode == 200) {
               return  res.end(body);
            }else{
              acluster.shift();
              next();
            }
        })
    }
    next();
}

function proxyPass(config){
    return function(req,res,next){
       var target = config[req.hostname];
        proxy(req,res,target);
    }
}
app.use(proxyPass({
    "a.zfpx.cn":aliveACluster,
    "b.zfpx.cn":["http://localhost:4000"]
}));


app.listen(80);
//应用服务器A a.zfpx.cn
/*
var app3000 = express();
app3000.get('/',function(req,res){
  res.end('3000');
});
app3000.listen(3000);
*/

var app3001 = express();
app3001.get('/',function(req,res){
    res.end('3001');
});
app3001.listen(3001);

//应用服务器B b.zfpx.cn
var app4000 = express();
app4000.get('/',function(req,res){
    res.end('4000');
});
app4000.listen(4000);