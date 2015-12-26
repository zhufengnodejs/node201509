var http = require('http');
var fs = require('fs');
var mime = require('mime');
/**
 *
 * @param request 请求
 * @param response 响应
 */
function serve(request,response){
 var url = request.url;
    console.log(url);
  if(url == '/'){
    //设置响应的类型，编码为utf-8
    response.setHeader('Content-Type','text/html;charset=utf-8');
    //读取文件的内容并且将读到的内容写入响应体
    fs.readFile('index.html',function(err,data){
      response.write(data);//写响应体
      response.end();
    })
  }else{
    static(url,response)
  }

  function static(url,response){
    //设置响应的类型，编码为utf-8
    response.setHeader('Content-Type',mime.lookup(url)+';charset=utf-8');
    //读取文件的内容并且将读到的内容写入响应体
    fs.readFile(url.slice(1),function(err,data){
      response.write(data);//写响应体
      response.end();
    })
  }


}
//每当有请求来的时候调用serve函数对客户端进行响应
var server = http.createServer(serve);

server.listen(8080,'localhost');