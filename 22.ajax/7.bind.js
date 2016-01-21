var util = {
    bind: (function () {
        /*if (Function.prototype.bind) {
            return function(func,context){
                return func.bind(context);
            }
        }*/
        return function () {
            var args = Array.prototype.slice.call(arguments);
            var func = args.shift();
            var context = args.shift();
            return function(){
                func.apply(context,args.concat(Array.prototype.slice.call(arguments)));
            }
        }
    })()
}
function say(age,word){
    console.log(this.name,age,word);
}
var obj = {name:'zfpx'};
var newSay = util.bind(say,obj,8);
newSay('hello');