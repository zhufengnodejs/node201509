var fs = require('fs');
var express = require('express');

var http = require('http');
var crypto = require('crypto');
function getHash(str){
    var shasum = crypto.createHash('sha1');
    return shasum.update(str).digest('hex');
}
/**
 * 1.
 */
function send(filename,req,res){
    fs.readFile(filename,function(err,data){
        var expires = new Date(Date.now()+ 10*1000);
        res.setHeader('Expires',expires.toUTCString);//设置过期时间
        res.setHeader('Cache-Control','max-age=10');
        res.end(data);
    });
}
http.createServer(function(req,res){
    console.log(req.url);
    if(req.url != '/favicon.ico'){
        var filename = req.url.slice(1);// /index.html
        send(filename,req,res);
    }else{
        res.end('404');
    }
}).listen(8080);