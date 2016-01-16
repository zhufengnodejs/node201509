/**
 * 多语言网站
 */


var express = require('express');
var path = require('path');
//Accept-Language:en,zh-CN;q=0.8,zh;q=0.6
var app = express();
function checkLanguage(langulages){
  function parse(str){
      console.log(str);
      if(!str)
         return [];
      return str.toLowerCase().split(',').map(function(language){
          var parts = language.split(';');
          console.log({name:parts[0],q:parts[1]||1});
          return {name:parts[0],q:parts[1]||1}
      }).filter(function(language){//过滤掉服务器端不能提供的语言
          return langulages.indexOf(language.name) !=-1;
      }).sort(function(pre,after){//按Q进行排序，从高到低排序
          return after.q - pre.q;
      }).map(function(item){
          return item.name;//把数组的每个元素转成字符串
      });
  }
  return function(req,res,next){
    var acceptLanguages = req.headers['accept-language'];
      console.log( parse(acceptLanguages));
    req.acceptLanguage = parse(acceptLanguages)[0] || langulages[0];
     next();
  }
}
app.use(checkLanguage(['en','zh']));;

app.get('/',function(req,res){
    res.setHeader('Content-Language',req.acceptLanguage);
    res.sendFile(path.join(__dirname,req.acceptLanguage,'index.html'));
});

app.listen(8080);
