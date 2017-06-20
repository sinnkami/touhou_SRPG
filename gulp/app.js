const gulp = require('gulp');
const value = require('./lib/value');
const args = require('yargs').argv;

gulp.task('app', function () {
  return gulp.src(`${value.src}/app.js`)
  .pipe(gulp.dest(`${value.dest}`))
})
