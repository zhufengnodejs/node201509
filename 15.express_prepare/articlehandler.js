var articles = {
    "1":"第一篇文章详情",
    "2":"第二篇文章详情",
    "3":"第三篇文章详情"
}
var fs = require('fs');
exports.list = function(req,res){
    fs.createReadStream('./index.html').pipe(res);
}
exports.detail = function(req,res){
    res.render('detail.html',{content:articles[req.query.id]});
}