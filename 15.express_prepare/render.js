
function render(str, data) {
    var tpl = str.replace(/<%=([\s\S]+?)%>/g, function (match, group) {
        return "'+obj." + group + "+'";
    });
    // hello+obj.username+obj.age
    tpl = " var tpl = '" + tpl + "'\n return tpl;";
    console.log(tpl);
    var compile = new Function('obj', tpl);
    return compile(data);
}
var obj = {
    username: "zfpx",
    age: 6
}

var result = render("hello <%=username%> <%=age%>", obj);
console.log(result);



/*
var tpl = "hello " + obj.username + " " + obj.age;
console.log(tpl);
*/
