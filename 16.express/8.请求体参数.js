/**
 * npm install ejs
 *
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var fs = require('fs');
var app = express();
app.use(express.static(path.join(__dirname,'public'),{
    dotfiles:'deny',
    index:'inx.html',
    setHeaders:function(response){
        response.setHeader('name','zfpx');
    }
}));
app.use(function(req,res,next){
    console.log(req.headers['content-type']);
    next();
});
app.use(bodyParser.json());
//querystring  false
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req,res,next){
    var contentType = req.headers['content-type'];
    //......
    req.body = {name:'zfpx',age:6};
    next();
});
app.post('/post',function(req,res){
    res.send(req.body);
});

app.set('view engine','html');
app.set('views',__dirname);
app.engine('html',require('ejs').__express);
app.get('/index',function(req,res){
 res.render('index',{
     name:'zfpx',
     age:6
 });
});
app.listen(8080);
