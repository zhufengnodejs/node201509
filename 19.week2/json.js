var str = '{"name":"zfpx","age":6}';
console.log(JSON.parse(str));
function parse(str){
    return new Function('return '+str)();
}
//var fn = new Function('return '+str);
/*function fn(){
    return {"name":"zfpx","age":6};
}*/
console.log(parse(str));

console.log(eval('('+str+')'));