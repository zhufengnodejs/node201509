var app = require('express')();
var session = require('express-session');
var FileStore = require('./fileStore')(session);
app.use(session({
    secret:'zfpx',
    resave:true,
    cookie:{
        maxAge:60*100
    },
    saveUninitialized:true,
    store:new FileStore()
}));
app.get('/save',function(req,res){
    req.session.name = 'zfpx';
    res.end('end');
});
app.get('/read',function(req,res){
    res.end(req.session.name);
});

app.listen(80);