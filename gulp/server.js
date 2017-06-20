const gls = require('gulp-live-server');
const gulp = require('gulp');
const value = require('./lib/value');
var server = gls(`${value.dest}/bin/www`, undefined, false);

gulp.task('server', function () {
  if (server) { server.stop(); }
  server.start();
})
