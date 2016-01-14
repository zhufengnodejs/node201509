var connect = require('./connectwithpath');

var app = connect();

app.use(function(req,res,next){
    res.send = function(html){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(html);
    }
    console.log('send');
    next();
});
app.use(function(req,res,next){
    next('我出错啦');
});
app.get('/hello',function(req,res){
    res.send('get hello');
});
app.post('/hello',function(req,res){
    res.send('post hello');
});
app.all('/404',function(req,res){
    res.send('404');
});
app.use(function(err,req,res,next){
    console.error(err);
    res.end(err);
});
app.listen(8080);