var uuid = require('uuid');
var http = require('http');
var querystring = require('querystring');
http.createServer(serve).listen(8080);
var SESSION_ID = 'connect.id';
var sessions = {};
// {money:100}
function serve(req,res){
    console.log(req.url);
  var cookie = req.headers['cookie'];
  var cookieObj = querystring.parse(cookie);
  if(cookieObj[SESSION_ID]){
    var sessionObj = sessions[cookieObj[SESSION_ID]];
    if(sessionObj){
        sessionObj.money = sessionObj.money - 10;
        res.setHeader('Content-Type','text/html;charset=utf8');
        res.end('欢迎你，老顾客,你的剪发卡还剩'+sessionObj.money+'元');
    }else{
        var sessionId = uuid.v4();
        sessions[sessionId] = {money:100};
        res.setHeader('Content-Type','text/html;charset=utf8');
        res.setHeader('Set-Cookie',SESSION_ID+"="+sessionId);
        res.end('欢迎你，新顾客,送你一张100块的剪发卡');
    }

  }else{
    var sessionId = uuid.v4();
    sessions[sessionId] = {money:100};
    res.setHeader('Content-Type','text/html;charset=utf8');
    res.setHeader('Set-Cookie',SESSION_ID+"="+sessionId);
    res.end('欢迎你，新顾客,送你一张100块的剪发卡');
  }

}
