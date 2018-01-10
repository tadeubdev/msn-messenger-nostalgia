'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
    return gulp.src('./assets/sass/*.sass')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
});
 
gulp.task('sass:watch', function () {
    gulp.watch('./assets/sass/*.sass', ['sass']);
});