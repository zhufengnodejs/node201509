/**
 *Promise 表示一个异步操作的最终结果，
 * 与之进行交互的方式主要是then方法。
 * 1. 跟状态有关 初始态->成功态 会告诉你最终的值
 *                   ->失败态 会告诉你失败的原因
 */
//延时对象 管理内部状态的
var Defer = function () {
    var func;var failFn;
    return {
        //异步操作成功
        resolve:function(value){
            func(value);
        },
        reject:function(err){
            failFn(err);
        },
        promise: {
            then: function (fn) {//promise有then方法
                func = fn;
                return this;
            },
            fail:function(fn){
                failFn = fn;
                return this;
            }
        }
    }
}
function later(){
   var defer = Defer();
   setTimeout(function(){
       defer.resolve('hello');
   },0);
   return defer.promise;
};
defer().then(function(data){
    console.log(data);
}).fail(function(err){
    console.error(err);
});


function missionA(cb){
    console.log('a');
    cb();
}

function missionB(){
    console.log('b');
}
missionA(missionB);

missionA();
missionB();