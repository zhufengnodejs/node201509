var express      = require('express');
//var cookieParser = require('cookie-parser');
var querystring = require('querystring');
var app = express();

//app.use(cookieParser());
app.use(function(req,res,next){
    //Cookie:name=zfpx; age=6; visited=1
    req.cookies = querystring.parse(req.headers.cookie,'; ','=');
    req.cookie = cookie;
    next();
});
app.get('/', function (req, res) {
    // 如果请求中的 cookie 存在 visited, 则输出 cookie
    // 否则，设置 cookie 字段 visited, 并设置过期时间为10分钟

    if (req.cookies.visited) {
        res.send("欢迎老朋友");
    } else {
        res.cookie('visited', 1, {httpOnly:true});
        res.send("欢迎新朋友");
    }
});
app.get('/a', function (req, res) {
    // 如果请求中的 cookie 存在 visited, 则输出 cookie
    // 否则，设置 cookie 字段 visited, 并设置过期时间为10分钟

    if (req.cookies.visited) {
        res.send("欢迎老朋友");
    } else {
        res.send("欢迎新朋友");
    }
});
app.get('/b', function (req, res) {
    // 如果请求中的 cookie 存在 visited, 则输出 cookie
    // 否则，设置 cookie 字段 visited, 并设置过期时间为10分钟

    if (req.cookies.visited) {
        res.send("欢迎老朋友");
    } else {
        res.send("欢迎新朋友");
    }
});
app.listen(8080);
//domain path  maxAge expires  httpOnly secure
function cookie(name,val,options){
  var opt = options || {};
  var parts = [name+'='+val];
  if(null != opt.maxAge){
      parts.push('Max-Age='+Number(maxAge));
  }

  if(opt.domain)
      parts.push('Domain='+opt.domain);

  if(opt.path)
      parts.push('Path='+opt.path);

  if(opt.expires)
     parts.push('Expires='+opt.expires.toUTCString());

  if(opt.httpOnly)
      parts.push('HttpOnly');
  if(opt.secure)
    parts.push('Secure');

    return parts.join('; ');
}