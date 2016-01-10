var http = require('http');
var url = require('url');
var proto = {};

function createServer(){
    function app(req,res){
       app.handle(req,res);
    }
    //把proto中的属性拷贝到app对象里
    Object.assign(app,proto);
    app.stack = [];
    return app;
}
proto.use = function(route,fn){
  var path = route;
  var handle = fn;
  if(typeof route != 'string'){
      handle = route;
      path = "/";
  }
  this.stack.push({handle:handle,path:path});
}

proto.handle = function(req,res){
  var stack = this.stack;
  var index = 0;
  function next(){
      var layer = stack[index++];
      var route = layer.path;
      var handle = layer.handle;

      var path = url.parse(req.url).pathname;
      if(path.startsWith(route)){
          handle(req,res,next);
      }else{
          next();
      }

  }
  next();
}

proto.listen = function(port){
    var server = http.createServer(this);
    server.listen(port);
}

module.exports = createServer;