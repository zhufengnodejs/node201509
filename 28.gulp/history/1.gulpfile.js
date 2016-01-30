var gulp = require('gulp');

gulp.task('default',function(){
    gulp.src('app/src.js')// 获取文件的流的api
        .pipe(gulp.dest('dist/dest.js')); // 写文件的api
});