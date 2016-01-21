/**
 * 可以对传入的对象链式添加一系列验证规则，然后开始逐条验证。
 */
var options = {
    method:'get',
    datType:'json'
}

function Validate(option){
  this.option = option;
  this.rules = [];
}

Validate.prototype = {
  addRule:function(key,msg,check){
      this.rules.push({
          key:key,
          msg:msg,
          check:check
      })
      return this;
  },
    start:function(){
       this.rules.forEach(function(rule){
           console.log(rule.check(this.option[rule.key]));
          if(!rule.check(this.option[rule.key])){
             throw new Error(rule.msg)
          }
       },this);
    }
}

var validate = new Validate(options);
validate.addRule('method','请求方式不合法',function(value){
    return /^(get|post)$/ig.test(value);
}).addRule('datType','返回类型不合法',function(value){
    return /^(json|text)$/ig.test(value);
}).start();