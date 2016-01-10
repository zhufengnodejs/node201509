var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
app.use(cookieParser());
/*app.use(session({
    secret: 'zfpx', //secret的值建议使用随机字符串
    cookie: {maxAge: 60 * 1000 * 30}, // 过期时间（毫秒）
    resave:true,
    saveUninitialized:true
}));*/
app.use(zfsession());
app.get('/', function (req, res) {
    if (req.session.sign) {//检查用户是否已经登录
        req.session.count = req.session.count+1;
        res.send('welcome <strong>' + req.session.name + '</strong>, 欢迎你第'+req.session.count+'次登录');
    } else {
        req.session.sign = true;
        req.session.name = 'zfpx';
        req.session.count = 1;
        res.send('欢迎登陆！');
    }
});
app.listen(80);
var uuid = require('uuid');
function zfsession(opt){
    var options = opt||{};
    var data = {};
    return function(req,res,next){
        var sid = options.name || 'connect.sid';
        var id = req.cookies[sid] || (options.genid?options.genid(): uuid.v4());
        res.cookie(sid,id,options.cookie||{
                maxAge:60*1000
            });
        req.session = data[id]||{};
        console.log(req.session);
        //当响应结束的时候要把在处理函数修改的session保存回data里
        res.on('finish',function(){
            console.log(req.session);
            if(Object.keys(req.session).length>0 || options.saveUninitialized)
                data[id] = req.session;
        });
        next();

    }
}