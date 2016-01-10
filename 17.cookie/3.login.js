var express      = require('express');
var cookieParser = require('cookie-parser');
var querystring = require('querystring');
var app = express();
app.set('view engine','html');
app.set('views',__dirname);
app.engine('html',require('ejs').__express);
app.use(cookieParser('zfpx'));
function checkLogin(req,res,next){
    if(req.signedCookies&& req.signedCookies.username){
        next()
    }else{
        res.redirect('/');
    }
}
app.get('/',function(req,res){
    res.render('index');
});

app.get('/login',function(req,res){
    res.cookie('username',req.query.username,{signed:true});
    //res.end(req.query.username);
    res.redirect('/user');
    //res.statusCode = 302;
    //res.setHeader('Location','/user');
    //res.end();
});

app.get('/user',checkLogin,function(req,res){
    res.render('user',{username:req.signedCookies.username});
});
app.listen(8080);