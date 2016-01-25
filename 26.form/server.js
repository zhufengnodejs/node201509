var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static(__dirname));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post('/ajax',function(req,res){
    //console.log(req.query);
    console.log(req.body);
    res.send("hello");
});
app.listen(8080);