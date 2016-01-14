var http = require('http');
module.exports = createApplication;
function createApplication(){
    var app = function(req,res){
      var index = 0;
      function next(){
       if(index == app.stack.length)
            return;
        var fn = app.stack[index++];
        fn(req,res,next);
      }
      next();
    }
    app.stack = [];

    app.use = function(fn){
        app.stack.push(fn);
    }

    app.listen = function(){
        var server = http.createServer(this);
        server.listen.apply(server,arguments)
    }
   var methods = ['get','post','delete','put'];
    methods.forEach(function(method){
        app[method] = function(fn){
            app.stack.push(function(req,res,next){
                if(req.method.toLowerCase() == method){
                    fn(req,res);
                }else{
                    next();
                }
            });
        }
    })
    app.all = function(fn){
        app.stack.push(function(req,res,next){
             fn(req,res);
        });
    }

    return app;
}

