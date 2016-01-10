var articles = {
    "1":"第一篇文章详情",
    "2":"第二篇文章详情",
    "3":"第三篇文章详情"
}
var fs = require('fs');
module.exports = function(app){
    app.use("/list",function(req,res){
        fs.createReadStream('./index.html').pipe(res);
    });

    app.use("/article",function(req,res){
       /* fs.readFile('./detail.html','utf8',function(err,data){
            data = data.replace('<%=content%>',articles[req.query.id]);
            res.send(data);
        })*/
        console.log("/article");
        res.render('detail.html',{content:articles[req.query.id]});
    });
    app.use(function(req,res){
        res.end("404");
    });
}