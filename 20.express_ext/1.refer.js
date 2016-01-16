/**
 * 图片防盗链
 * Referer:http://localhost:63342/node201509/20.express_ext/img.html
 */
var express = require('express');
var path = require('path');

var app = express();
//判断用户是否有权限访问此图片
app.use('/img',function(req,res,next){
    var whitelist = ['b.zfpx.cn'];//设置白名单，允许 哪些主机过来请求
    var referrer = req.headers.referer;
    console.log(referrer);
    if(!referrer)
       return next();
    var referHost = require('url').parse(referrer).host.split(':')[0];
    if(referHost === req.host ||  whitelist.indexOf(referHost)!=-1){
        return next();
    }
    res.sendFile(path.join(__dirname,'img','wrong.jpg'));

});
app.use(express.static(__dirname));
//返回HTML
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'img.html'));
});
app.listen(8080);
