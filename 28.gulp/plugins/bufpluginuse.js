var gulp = require('gulp');
var gulpPrefixer = require('./bufplugin');

gulp.src(['a.js','b.js'])
    .pipe(gulpPrefixer('//我要添加前缀'))
    .pipe(gulp.dest('dist'));