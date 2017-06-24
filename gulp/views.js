const gulp = require('gulp');
const jade = require("gulp-jade");
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const args = require('./lib/value');

gulp.task('views', function () {
  return gulp.src(`${args.src}/views/${args.vendor}/**/*.jade`)
  .pipe(plumber())
  .pipe(gulpif(args.vendor === "electron", jade({
    pretty: !args.compression
  })))
  .pipe(gulp.dest(`${args.dest}/views`))
})
