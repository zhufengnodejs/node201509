function base64(str){
    var buf=new Buffer(str);
    var arrB=[];
    var result;
    var bStr;
    for(var i=0;i<buf.length;i++){
        var len = buf[i].toString("2").length;
        arrB.push(("000000000"+buf[i].toString("2")).substr(-8));
    }
    bStr=arrB.join("");
    result=handleBinary(bStr);
    return result;
}
function handleBinary(bStr){
    var i=0;
    var lastStr="";
    var charStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var result=""
    switch (bStr.length%24){
        case 0:
            break;
        case 8://剩了1个字节
            lastStr="==";
            break;
        default://剩2个
            lastStr="=";
    }
    switch (bStr.length%6){
        case 2:
            bStr+="0000";
            break;
        case 4:
            bStr+="00";

    }
    for(var i= 0,sLen=bStr.length;i<sLen;i=i+6){
        var num=parseInt(bStr.substr(i,6),"2");
        result+=charStr[num];
    }
    return result+lastStr;
}
//54+gYB==
//54+gYQ==

//54+gYQ==
console.log(base64('珠a'));