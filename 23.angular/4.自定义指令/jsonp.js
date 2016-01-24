var express = require('express');
var app = express();
app.use(function(req,res,next){
    console.log(req.url);
    next();
});
app.all('/check',function(req,res){
  var data = req.query;

    var callback = data.callback;
    console.log(callback);
    if(data.username == 'admin'){
        res.send(callback+'({"unique":false})');
    }else{
        res.send(callback+'({"unique":true})');
    }
});
app.use(function(req,res,next){
    res.end('data');
});

app.listen(8080);