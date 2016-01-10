var http = require('http');
var url = require('url');
var querystring = require('querystring');
var articles = {
    "1":"第一篇文章详情",
    "2":"第二篇文章详情",
    "3":"第三篇文章详情"
}
http.createServer(function(req,res){
  //所有的程序都要使用的代码
  var urlObj = url.parse(req.url,true);
  var pathname = urlObj.pathname;
  var query = urlObj.query;

  if(pathname == '/'){
      send('<ul><li><a href="/article?id=1">第一篇</a></li><li><a href="/article?id=2">第二篇</a></li><li><a href="/article?id=3">第三篇</a></li></ul>');
  }else if(pathname == '/article'){
      send(articles[query.id]);
  }else{
      res.end("404");
  }
    //公共的业务逻辑
  function send(html){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end(html);
  }

}).listen(8080);