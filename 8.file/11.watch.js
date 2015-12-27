var fs = require('fs');
var watchFn = function(currState,prevStat){
    console.log(currState);
    console.log(prevStat);
};
fs.watchFile('4.txt',{interval:300},watchFn);
setTimeout(function(){
    fs.unwatchFile('4.txt',watchFn)
},1000 *10)