'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')

const pathToFiles = ['./assets/sass/**/*.sass']

gulp.task('sass', () => {
    return gulp.src(pathToFiles)
        .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
})
