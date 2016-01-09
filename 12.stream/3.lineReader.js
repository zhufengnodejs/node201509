var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var util = require('util');
///r/n 0x0d 0x0a
// http://baike.baidu.com/link?url=ZwIraTFCTerLt5dqA-DLufYtnzCnwJJVDkyWnU-6zEFq15P7YBOzX4m5Bu4LHtuT_34TPwo9lfaJwpQWuDfMK_

var RETURN= 0x0d; // ascii \r       十六进制的d就等于十进制的13  回车 return 移动光标到该行的起始位置
var NEWLINE = 0x0a; // ascii  \n   十六进制的a等于十进制的10 换行 newline 换行至下一行行首起始位置

function LineReader(path){
    this._rs = fs.createReadStream(path);
}
util.inherits(LineReader,EventEmitter);

LineReader.prototype.on('newListener',function(name,func){
    var self=this;
    var lineData;
    var ok=false;
    var dataArr=[];
    if(name === "newLine"){
        this._rs.on("readable",function(data){
            var data;
            var dataArr=[];
            while(null!=(data=self._rs.read())){
                for(var i=0;i<data.length;i++){
                    if(ok){
                        if(data[i] === NEWLINE){
                            var buf=new Buffer(dataArr);
                            if(buf.length>0){
                                self.emit("newLine",buf)
                            }
                            dataArr=[]
                            ok=false;
                        }
                    }else if(data[i] === RETURN){
                        ok=true;
                    }else
                      dataArr.push(data[i])
                }
                var buf=new Buffer(dataArr);
                if(buf.length>0){
                    self.emit("newLine",buf)
                }
            }


        })
    }
    if(name === "end"){
        this._rs.on("end",function(){
            self.emit("end")
        })
    }

});

var reader = new LineReader('./read.txt');
reader.on('newLine',function(data){
    console.log(data.toString());
});
reader.on('end',function(){
    console.log('end');
});
