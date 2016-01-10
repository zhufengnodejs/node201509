/**
 * 1. 安装
 *  npm install express
 * 2. 获取和引用
 *  var
 **/

var express = require('express');
var app = express();
app.get('/list',function(req,res){
    res.send('list'+req.url);
});
app.post('/list',function(req,res){
    res.send('post'+req.url);
});
app.all('/all',function(req,res){
    res.send('post'+req.url);
});
app.all('*',function(req,res){
    res.send('此页面走丢了');
});
app.listen(8080);