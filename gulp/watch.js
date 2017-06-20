const gulp = require('gulp');
const args = require('yargs').argv;
const value = require('./lib/value');

gulp.task('watch', (callback) => {
  if (!args.watch) { return callback(); }

  gulp.watch(`${value.src}/bin/www`, ['bin', 'server']);
  gulp.watch(`${value.src}/public/js/**/*.js`, ['scripts'])
  gulp.watch(`${value.src}/public/scss/**/*.scss`, ['style:sass'])
  gulp.watch(`${value.src}/public/css/**/*.css`, ['style:css'])
  gulp.watch(`${value.src}/public/images/**/*.`, ['images'])
  gulp.watch(`${value.src}/routes/**/*.js`, ['routes', 'server'])
  gulp.watch(`${value.src}/views/**/*.jade`, ['views', 'server'])
  gulp.watch(`${value.src}/app.js`, ['app', 'server'])
})
