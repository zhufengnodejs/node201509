var gulp = require('gulp');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
gulp.task('less',function(){
    return gulp.src('app/less/*.less')
        .pipe(less())
        //.pipe(gulp.dest('dist/css'))
        .pipe(minify())
        .pipe(rename(function (path) {
            //path.dirname += "/ciao";//目录
            path.basename += ".min";//文件名
            //path.extname = ".css" //扩展名
        }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('default',['less']);