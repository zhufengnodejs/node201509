/**
 * 0 stdin
 * 1 stdout
 * 2 stderr
 */
var fs = require('fs');
/*fs.write(2,'珠峰培训',function(err){

})*/
setTimeout(function(){
    var buffer = new Buffer(1);
    //console.log(buffer);
    fs.read(0,buffer,0,1,0,function(err){
        console.log(buffer.toString());
    })
},3000);

setInterval(function(){

},1000)


