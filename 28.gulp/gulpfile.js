var gulp = require('gulp');
var fs = require('fs');
var Q = require('q');

gulp.task('default',function(){
   gulp.watch('app/**/*.js',function(event){
       // event.path event.type
       console.log(event.path,event.type);
       switch(event.type){
           case 'added':

               break;
           case 'changed':

               break;
           case 'deleted':

               break;
           default:
               break;
       }
   })
});
