const gulp = require('gulp');
const watch = require('gulp-watch');
const args = require('./lib/value');

gulp.task('watch:express', (callback) => {
  if (!args.watch) { return callback(); }

  watch(`${args.src}/bin/www`, () => { return gulp.start(['bin', 'server']); });
  watch(`${args.src}/public/**/*`, () => { return gulp.start(['public']); });
  watch(`${args.src}/routes/**/*.js`, () => { return gulp.start(['routes', 'server']); });
  watch(`${args.src}/views/${args.vendor}/**/*.jade`, () => { return gulp.start(['views', 'server']); });
  watch(`${args.src}/${args.vendor}.js`, () => { return gulp.start([`${args.vendor}`, 'server']); });
})

gulp.task('watch:electron', (callback) => {
  if (!args.watch) { return callback(); }

  watch(`${args.src}/public/scss/**/*`, () => { return gulp.start(['style']); });
  watch(`${args.src}/public/css/**/*`, () => { return gulp.start(['style']); });
  watch(`${args.src}/public/js/**/*`, () => { return gulp.start(['scripts']); });
  watch(`${args.src}/public/json/**/*`, () => { return gulp.start(['json']); });
  watch(`${args.src}/public/images/**/*`, () => { return gulp.start(['images']); });
  watch(`${args.src}/views/${args.vendor}/**/*.jade`, () => { return gulp.start(['views']); });
  watch(`${args.src}/${args.vendor}.js`, () => { return gulp.start([`${args.vendor}`]); });
})
