var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less',function(){
    return gulp.src('app/less/*.less').pipe(less()).pipe(gulp.dest('dist/css'));
});

gulp.task('default',['less']);