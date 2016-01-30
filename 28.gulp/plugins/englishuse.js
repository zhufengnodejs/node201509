var gulp = require('gulp');
var english2chinese = require('./english2chinese');

gulp.src(['english.txt'])
    .pipe(english2chinese({
        'hello':'你好'
    }))
    .pipe(gulp.dest('dist'));