var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglifyjs'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    notify = require('gulp-notify');


gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost:2368"
    });
});


gulp.task('sass', function() {
  return gulp.src('assets/scss/style.scss')
    .pipe(sass({ style: 'expanded' }))
    .on('error', notify.onError())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9'))
    .pipe(gulp.dest('assets/css'))
    .pipe(reload({stream: true}))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('assets/css'));
});


gulp.task('js', function() {
  return gulp.src('assets/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/js/dist'))
    .pipe(reload({stream:true}));
});


gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
    gulp.watch('assets/**/*.scss', ['sass']);
    gulp.watch('assets/**/*.js', ['js']);
});