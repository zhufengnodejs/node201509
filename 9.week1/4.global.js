//console.log(global);
//console.log(process.memoryUsage());
/**
 * { rss: 18,636,800, 常驱内存 resident
 * heapTotal: 9,275,392, 分配对象的区域
  * heapUsed: 5,126,584 }

 **/
/*
var arr=[];
for(var i=0;i<100000;i++){
    arr.push(new Object());
    console.log(process.memoryUsage());
}*/

var fs = require('fs');
/*
fs.readFile('1.txt1',function(err,data){
    if(err)
     console.error(err);
    else
     console.log(data);
})
*/
try{
    //var content = fs.readFileSync('1.txt1')
    fs.readFile('1.txt1',function(err,data){
        /*if(err)
            console.error(err);
        else
            console.log(data);*/
    })
}catch(e){
    console.error(e);
}
