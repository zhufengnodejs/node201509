var fs = require('fs');

/**
 *同步的方式读取
 **/
var data = fs.readFileSync('index.txt','utf8');
console.log(data);
//异步
fs.readFile('template.txt','utf8',function(err,data){
    console.log(data);
});

//异步
fs.readFile('data.txt','utf8',function(err,data){
    console.log(data);
});