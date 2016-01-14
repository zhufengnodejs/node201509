var methods = ['get','post','delete','put'];
var app = {};
methods.forEach(function(method){
    console.log(method);
    app[method] = method;
});
console.log(app);