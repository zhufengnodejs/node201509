var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static(__dirname));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req,res,next){
    console.log(req.headers.cookie);
    res.setHeader('Access-Control-Allow-Origin',"http://localhost:63342");
    res.setHeader('Access-Control-Allow-Headers',"Content-Type");
    res.setHeader('Access-Control-Allow-Credentials',"true");
    next();
});
app.post('/books',function(req,res){
    console.log(req.body);
    //res.sendfile('books.json');
    //res.setHeader('Content-Type','text/plain');
    /*fs.readFile('books.json',function(err,data){
        res.write(data);
        res.end();
    })*/
    res.send("<meta charset='utf-8'><div>hello</div>");
});
app.listen(8080);