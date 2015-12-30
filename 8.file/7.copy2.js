var fs = require('fs');
//同步的方式把src 复制到target里
function copy(src, target) {
    fs.open(src, 'r', function (err, fd) {
        fs.open(target, 'w', function (errw, fdw) {
            var pos = 0;
            function read() {
                var buffer = new Buffer(3);
                fs.read(fd, buffer, 0, 3, pos, function (err, bytesRead) {
                    if (bytesRead > 0){
                        fs.write(fdw, buffer.slice(0, bytesRead), 0, bytesRead, pos, function (errww, bytesWritten) {
                            console.log('bytesWritten',bytesWritten);
                            pos += bytesRead;
                            read();
                        });
                    }else{
                        fs.fsync(fdw,function(){
                            fs.close(fdw);
                        })
                    }

                });
            }
            read();
        });

    });
}


copy('line.txt', '2.txt');