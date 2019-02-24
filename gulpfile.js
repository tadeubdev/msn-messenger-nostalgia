'use strict'

let gulp = require("gulp")
let prefix = require("gulp-autoprefixer")
let cleancss = require("gulp-clean-css")
let concat = require("gulp-concat")
let livereload = require("gulp-livereload")
let rename = require("gulp-rename")
let sass = require("gulp-sass")

gulp.task('sass', function() {
    gulp.src('assets/sass/*.sass')
    .pipe(sass())
    .pipe(prefix({
        browsers: ['last 5 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('public/css/'))
})