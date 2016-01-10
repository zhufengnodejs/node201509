function a(a,b){
    console.log(a+b);
}

var a = new Function('a','b','console.log(a+b);');
a(1,2);
var b = {
    name:'zfpx'
}
var b = new Object();
b.name = 'zfpx';

var arr = [1,2,3];
var arr = new Array();
arr[0] = 1;

function compile(str){
    var tpl = str.replace(/<%=([\s\S]+?)%>/g, function (match, group) {
        return "'+obj." + group + "+'";
    });
    tpl = " var tpl = '" + tpl + "'\n return tpl;";
    return new Function('obj', tpl);
}


var obj1 = {
    username: "zfpx1",
    age: 2
}
var obj2 = {
    username: "zfpx2",
    age: 3
}
var c = compile("hello <%=username%> <%=age%>");
console.log(c(obj1));
console.log(c(obj2));