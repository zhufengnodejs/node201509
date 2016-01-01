function base64(str) {
    var buf = new Buffer(str);
    var arrB = [];
    var result;
    var bStr;
    for (var i = 0; i < buf.length; i++) {
        var len = buf[i].toString("2").length;
        //必需。要抽取的子串的起始下标。必须是数值。如果是负数，
        // 那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
        arrB.push(("0000000000000000" + buf[i].toString("2")).substr( -8 ));
        //arrB.push((Array(len).join('0') + buf[i].toString("2")).slice(-8));
    }
    bStr = arrB.join("");
    result = handleBinary(bStr);
    return result;
}
function handleBinary(bStr) {
    var i = 0;
    var lastStr = "";
    var charStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var result = ""
    switch (bStr.length % 24) {
        case 0:
            break;
        case 8:
            lastStr = "==";
            break;
        default:
            lastStr = "=";
    }
    switch (bStr.length % 6) {
        case 2:
            bStr += "0000";
            break;
        case 4:
            bStr += "00";

    }
    for (var i = 0, sLen = bStr.length; i < sLen; i = i + 6) {
        var num = parseInt(bStr.substr(i, 6), "2");
        result += charStr[num];
    }
    return result + lastStr;
}
module.exports = base64;

console.log(base64('珠'));