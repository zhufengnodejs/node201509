var http = require('http');
module.exports = createApplication;
function createApplication() {
    var app = function (req, res) {
        var index = 0;

        function next(err) {
            if (index == app.stack.length)
                return;
            var layer = app.stack[index++];
            var route = layer.route;
            var fn = layer.fn;
            if(err){
               if(fn.length==4){
                   fn(err,req, res, next);
               }else{
                   next(err);
               }
            }else{
                if(req.url.startsWith(route)){
                    fn(req, res, next);
                }else{
                    next();
                }
            }

        }

        next();
    }
    app.stack = [];

    app.use = function (route, fn) {
        if (typeof route == 'function') {
            fn = route;
            route = "/";
        }
        app.stack.push({route: route, fn: fn});
    }

    app.listen = function () {
        var server = http.createServer(this);
        server.listen.apply(server, arguments)
    }
    var methods = ['get', 'post', 'delete', 'put'];
    methods.forEach(function (method) {
        app[method] = function (route,fn) {
            app.stack.push({route:route,fn:function (req, res, next) {
                if (req.method.toLowerCase() == method) {
                    fn(req, res);
                } else {
                    next();
                }
            }});
        }
    })
    app.all = function (route,fn) {
        app.stack.push({route:route,fn:function (req, res, next) {
            fn(req, res);
        }});
    }

    return app;
}

