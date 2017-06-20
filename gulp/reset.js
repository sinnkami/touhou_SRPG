const gulp = require('gulp');
const del = require('del');
const value = require('./lib/value');

gulp.task('reset', (callback) => {
  return del(`${value.dest}/**/*`, callback);
})
