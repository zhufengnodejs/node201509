//注册表
var registry = {
    $http:{},
    countService:{count:0, add: function () {this.count++;}}
}

function greet(countService){
    countService.add();
    countService.add();
    console.log(countService.count);
}

var inject = function(fun,context){
  var src = fun.toString();
  var matcher = src.match(/function\s?\w+\((\w+)\)/);
  var argnames = matcher.slice(1);
    var args = [];
  for(var i=0;i<argnames.length;i++){
      var argObj = registry[argnames[i]];
      args.push(argObj);
  }
  fun.apply(context,args);
}
inject(greet);