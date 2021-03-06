'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');
var svgstore = require('gulp-svgstore');
var posthml = require('gulp-posthtml');
var include = require('posthtml-include');
var uglify = require("gulp-uglify");
var pump = require("pump");
var cheerio = require("gulp-cheerio");
var server = require('browser-sync');
var minify = require('gulp-minify');
var htmlmin = require("gulp-htmlmin");
var del = require('del');

gulp.task('clean', function () {
  return del('build');
});

gulp.task('copy', function () {
  return gulp.src([
      'source/fonts/*.{woff,woff2}',
      'source/img/**',
      'source/js/**'
    ], {
      base: 'source'
    })
    .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});

gulp.task('images', function () {
  return gulp.src('build/img/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task('webp', function () {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(webp({
      quality: 75
    }))
    .pipe(gulp.dest('build/img'));
});

gulp.task('sprite', function () {
  return gulp.src('source/img/*.svg')
  .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
            },
            parserOptions: { xmlMode: true }
        }))
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/img'));
});

gulp.task('html', function () {
  return gulp.src('source/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(posthml([
      include()
    ]))
    .pipe(gulp.dest('build'));
});

gulp.task("js", function (cb) {
  pump([
        gulp.src("source/js/**/*.js"),
        uglify(),
        rename({suffix: ".min"}),
        gulp.dest("build/js")
    ],
    cb
  );
});

gulp.task('server', function () {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series('css'));
  gulp.watch('source/sprite/*.svg', gulp.series('sprite', 'html', 'refresh'));
  gulp.watch('source/*.html', gulp.series('html', 'refresh'));
});

gulp.task('refresh', function (done) {
  server.reload();
  done();
});

gulp.task('build', gulp.series('clean', 'copy', 'images', 'webp','css', 'sprite', 'html', 'js'));
gulp.task('start', gulp.series('build', 'server'));
