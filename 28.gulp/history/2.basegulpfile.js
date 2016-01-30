var gulp = require('gulp');

gulp.task('default',function(){
    //有通配符开始出现的那部分路径为 `**/*.js`
    gulp.src(['app/**/*.js','!app/jquery/*.js'],{base:'app'})
        .pipe(gulp.dest('dist')); //最后生成的文件路径为 dist/**/*.js
});
