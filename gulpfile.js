'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const livereload = require('gulp-livereload')

const pathToFiles = ['./assets/sass/*.sass', './assets/sass/**/*.sass']

gulp.task('sass', () => {
    return gulp.src(pathToFiles)
        .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload({ start: true }))
})
 
gulp.task('sass:watch', () => {
    livereload.listen()
    gulp.watch(pathToFiles, ['sass'])
})