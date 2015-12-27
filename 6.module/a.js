exports.loaded = function(){
    console.log(module.loaded);
}
console.log('A开始加载');
//var b  = require('./b');
exports.name = 'zfpx';

console.log('module.parent',module.parent);
