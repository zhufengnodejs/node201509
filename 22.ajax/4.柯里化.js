/**
 *柯里化就是预先将某些参数传入，
 * 得到一个函数
 * 但是预先传入的参数被保存在闭包中。
 */

function isType(type){
    return function(obj){
        return Object.prototype.toString.call(obj) == '[object '+type+']'
    }
}
var util = {};
['Array','Object','Function','Date'].forEach(function(type){
    util['is'+type] = isType(type);
});
console.log(util.isDate(new Date()));
console.log(util.isArray([]));