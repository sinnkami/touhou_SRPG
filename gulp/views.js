const gulp = require('gulp');
const args = require('./lib/value');

gulp.task('views', function () {
  return gulp.src(`${args.src}/views/${args.vendor}/**/*.jade`)
  .pipe(gulp.dest(`${args.dest}/views`))
})
