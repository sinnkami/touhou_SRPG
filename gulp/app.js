const gulp = require('gulp');
const rename = require("gulp-rename");
const args = require('./lib/value');

gulp.task('express', function () {
  return gulp.src(`${args.src}/${args.vendor}.js`)
  .pipe(rename("./app.js"))
  .pipe(gulp.dest(`${args.dest}/`))
})

gulp.task('electron', function () {
  return gulp.src(`${args.src}/${args.vendor}.js`)
  .pipe(rename("./app.js"))
  .pipe(gulp.dest(`${args.dest}/`))
})
