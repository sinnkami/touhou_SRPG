const gulp = require('gulp');
const value = require('./lib/value');
const args = require('yargs').argv;

gulp.task('routes', function () {
  return gulp.src(`${value.src}/routes/**/*.js`)
  .pipe(gulp.dest(`${value.dest}/routes`))
})
