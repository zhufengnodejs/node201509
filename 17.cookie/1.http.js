var http = require('http');
http.createServer(function (req, res) {
    console.log(req.headers.cookie);
    var time = new Date(new Date().getTime() + 60 * 1000).toGMTString();
    res.setHeader('Set-Cookie',['name=zfpx; path=/;','age=6; path=/;'])
    res.end('hello');
}).listen(8080);
