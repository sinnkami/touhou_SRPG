const gulp = require('gulp');
const value = require('./lib/value');

gulp.task('bin', () => {
  return gulp.src(`${value.src}/bin/www`)
    .pipe(gulp.dest(`${value.dest}/bin/`))
})
