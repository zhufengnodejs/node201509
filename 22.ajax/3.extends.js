var utils = {
    /**
     *
     * @param _defaultOptions 默认配置
     * @param options 用户自定义配置
     */
    extends:function(_defaultOptions,options){
       var result = {};
       for(var attr in _defaultOptions){
           result[attr] = options[attr] || _defaultOptions[attr];
       }
       return   result;
    }
}
var _defaultOptions = {
    name:'zfpx',
    age:6
}
var options = {
    age:7,
    name:'zfpx2'
}

console.log(utils.extends(_defaultOptions,options));
console.log(utils.extends(_defaultOptions,{}));