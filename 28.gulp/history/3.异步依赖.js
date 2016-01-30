var gulp = require('gulp');
var fs = require('fs');
var Q = require('q');
gulp.task('1',function(){
    console.log('1');
});
gulp.task('2',function(){
    var defer = Q.defer();

    setImmediate(function(){
        fs.writeFile('1.txt','hello',function(err){
            defer.resolve('成功');
        })
    });
     return defer.promise;
});
/*gulp.task('2',function(callback){
    setImmediate(function(){
        fs.writeFile('1.txt','hello',function(err){
            callback();
        })
    });

});*/
gulp.task('3',function(){
    console.log('3');
});

gulp.task('default',['1','2','3'],function(){
    fs.readFile('1.txt','utf8',function(err,data){
        console.log(data);
    });
});
