
//三种构建buffer的方法
var buf1 = new Buffer(3);
console.log(buf1);
buf1.fill(0);
console.log(buf1);
buf1[0] = 0x61;
buf1[1] = 0x62;
buf1[2] = 0x63;

var buf2 = new Buffer([0x61,0x62,0x63]);

var buf3 = new Buffer("abc",'utf8');
console.log(buf1.toString()==buf2.toString());
console.log(buf2.toString()==buf3.toString());

var buf4 = new Buffer("a",'utf8');
console.log(buf4);
var buf5 = new Buffer("a",'ascii');
console.log(buf5);

var str = "珠峰培训";
var buf = new Buffer(str,'utf8');
console.log(str.length);
console.log(buf.length);
console.log(buf.toString('utf8'));

str[0] = '天';
console.log(str);
console.log(buf);
/*buf[0] = 0;
console.log(buf);*/

var newStr = str.slice(1);
var newBuff = buf.slice(1);
newBuff[1] = 5;
console.log(buf);

var buf = new Buffer(12);
buf.write("珠峰",0,6);
buf.write("培训",6,6);
console.log(buf.toString());

var buffer = new Buffer("珠峰培训");
var buf1 = buffer.slice(0,7);//7
var buf2 = buffer.slice(7);//5
console.log(buf1.toString());
console.log(buf2.toString());

var StringDecoder = require('string_decoder').StringDecoder;
var decoder1 = new StringDecoder();
var decoder2 = new StringDecoder();
console.log(decoder1.write(buf1));
console.log(decoder2.write(buf2));


var srcBuf = new Buffer([4,5,6]);
var tarBuf = new Buffer(6);
tarBuf[0] = 1;
tarBuf[1] = 2;
tarBuf[2] = 3;
srcBuf.copy(tarBuf,3,1,2);
console.log(tarBuf);

var buf1 = new Buffer([1,2,3]);
var buf2 = new Buffer([4,5,6]);
var buf = concat([buf1,buf2],6);
console.log(buf);
function concat(list,length){
    return result;
}