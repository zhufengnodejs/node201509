
var articlehandler = require('./articlehandler');
var fs = require('fs');
module.exports = function(app){
    app.use("/list",function(req,res){
        articlehandler.list(req,res);
    });

    app.use("/article",function(req,res){
        articlehandler.detail(req,res);
    });
    app.use(function(req,res){
        res.end("404");
    });
}