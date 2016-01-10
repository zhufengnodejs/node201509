/**
 * 接收客户端的参数数据
 * 1. query查询字符串
 * 2. 路径参数
 * 3. 请求体里 req.body
 * 4. req.headers
 */

var express = require('express');
var app = express();
app.get('/query',function(req,res){
    res.send(req.query);
});
app.get('/article/:id/:name',function(req,res){
    res.send(req.params);
    //{id:'xxx',name:'xxx'}
});
app.all('/host',function(req,res){
    console.log(req.path);
    console.log(req.host);
    res.send('host');
});
app.all('/status',function(req,res){
    console.log(req.path);
    console.log(req.host);
    res.sendStatus(400);
});
app.all('*',function(req,res){
    res.send('此页面走丢了');
});
app.listen(8080);