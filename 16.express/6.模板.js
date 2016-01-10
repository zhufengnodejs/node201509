/**
 * npm install ejs
 *
 */
var express = require('express');

var app = express();

app.set('view engine','html');
app.set('views',__dirname);
app.engine('html',require('ejs').__express);
app.get('/',function(req,res){
 res.render('index',{
     name:'zfpx',
     age:6
 });
});
app.listen(8080);
