var fs = require('fs');
fs.readFile('line.txt',function(err,data){
    console.log(data.length);
})