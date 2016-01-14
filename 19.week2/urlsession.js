/**
 * 1.第一次访问 http://localhost:8080
 * 2.服务器为它生成sesion,http://localhost:8080?connect.sid=xxxx
 * @type {v4|exports|module.exports}
 */
var uuid = require('uuid');
var http = require('http');
var querystring = require('querystring');
http.createServer(serve).listen(8080);
var SESSION_ID = 'connect.id';
var sessions = {};
function serve(req,res){

}