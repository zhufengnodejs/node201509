var gulp = require('gulp');
var fs = require('fs');
var $ = load();

gulp.task('default',function(){
  gulp.src('app/*.js')
    .pipe($.concat('all.js'))
    .pipe(gulp.dest('dist'))
});


function load(){
    var devDependencies =  JSON.parse(fs.readFileSync('package.json')).devDependencies;
    var $ = {};
    for(var attr in devDependencies){
        if(attr.indexOf('gulp-')==0)
            $[attr.slice(5)] = require(attr);
    }
    return $;
}