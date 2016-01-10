var stack = [function(req,res,next){
    console.log('1');
    next();
},function(req,res,next){
    console.log('2');
}]
var index = 0;
function next(){
    stack[index++]('req','res',next);
}
next();