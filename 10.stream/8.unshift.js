/**
 *
 */
var fs = require('fs');
var rs = fs.createReadStream('request.txt');
var StringDecoder = require('string_decoder').StringDecoder;
//把请求里的请求行和请求头取出来。调用callback
function parseHeader(callback){
  var decoder = new StringDecoder('utf8');
    var headers = '';
  rs.on('readable',onReadable);
  function onReadable(){
    var chunk;
    while(null != (chunk = rs.read())){
      var str = decoder.write(chunk);
        if(str.match(/\r\n\r\n/)){
            var split = str.split(/\r\n\r\n/);
            headers += split.shift();
            rs.removeListener('readable',onReadable);
            var left = split.join('\r\n\r\n');
            var buf = new Buffer(left);
            if(buf.length)
              rs.unshift(buf);
            return callback(headers);
        }else{
            headers+=str;
        }
    }
  }
}

parseHeader(function(headers){
    rs.setEncoding('utf8');
    rs.on('data',function(data){
        console.log(data);
    });
})