//创建一个128K的文件

var fs = require('fs');
fs.writeFile('./128.txt',new Buffer(129* 1024));