const gulp = require('gulp');
const value = require('./lib/value');

gulp.task('views', function () {
  return gulp.src(`${value.src}/views/**/*.jade`)
  .pipe(gulp.dest(`${value.dest}/views`))
})
