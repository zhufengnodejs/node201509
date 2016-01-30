var gulp = require('gulp');
var fs = require('fs');
var Q = require('q');
var path = require('path');

gulp.task('default',function(){
   gulp.watch('app/**/*.js',function(event){
       // event.path event.type
       console.log(event.path,event.type);
       console.log(event.path.slice(path.resolve('app').length));
       console.log(path.join('dist',
           event.path.slice(path.resolve('app').length)));
       // path fs __dirname
       ///fs.readFile() fs.writeFile() fs.unlink()
       switch(event.type){
           case 'added':
           /*fs.createReadStream(event.path).pipe(
               fs.createWriteStream(path.join('dist',
                   event.path.slice(path.resolve('app').length)))
           );*/
               fs.readFile(event.path,function(err,data){
                   fs.writeFile(path.join('dist',
                       event.path.slice(path.resolve('app').length)),data);
               })
               break;
           case 'changed':
               fs.createReadStream(event.path).pipe(
                   fs.createWriteStream(path.join('dist',
                       event.path.slice(path.resolve('app').length)))
               );
               break;
           case 'deleted':
               fs.unlink(path.join('dist',
                   event.path.slice(path.resolve('app').length)));
               break;
           default:
               break;
       }
   })
});
