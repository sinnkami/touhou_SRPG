const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const value = require('./lib/value');
const gulpif = require('gulp-if');
const args = require('yargs').argv;

gulp.task('images', function () {
  return gulp.src(`${value.src}/public/images/**/*`)
  .pipe(gulpif(args.compression, imagemin()))
  .pipe(gulp.dest(`${value.dest}/public/images`))
})
