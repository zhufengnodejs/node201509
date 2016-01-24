var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.post('/check',function(req,res){

    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Headers',"Content-Type");
    var data = req.body;
    console.log(req.url,data);
    if(data.username == 'admin'){
        res.send({unique:false});
    }else{
        res.send({unique:true});
    }
});
app.all('/check',function(req,res){
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Headers',"Content-Type");
    res.send({});
});
app.listen(8080);