var person = require('./person');
console.log(require.cache);
delete require.cache[require.resolve('./person')];
var person = require('./person');
//console.log(require);
person.welcome('welcome');
person.welcome('zfpx');

/**
 * 1. 核心模块 http fs
 * 2. 通过路径加载
 * 3. 其它的文件模块
 */