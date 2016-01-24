var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname));
app.use(bodyParser.json());
var books = [];
var id = 0;
app.route('/books')
    .get(function(req,res){
        res.send(books);
    }).post(function(req,res){
      var book = req.body;
      book.id = ++id;
      books.push(book);
       res.send(book);
    })
app.route('/books/:id').delete(function(req,res){
    console.log(req.method,req.url);
   var id = req.params.id;
    books = books.filter(function(book){
        return book.id != id;
    })
    res.send({code:'success'});
}).put(function(req,res){//修改

});

app.listen(8080);