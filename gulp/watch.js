const gulp = require('gulp');
const args = require('./lib/value');

gulp.task('watch:express', (callback) => {
  if (!args.watch) { return callback(); }

  gulp.watch(`${args.src}/bin/www`, ['bin', 'server']);
  gulp.watch(`${args.src}/public/js/**/*.js`, ['scripts'])
  gulp.watch(`${args.src}/public/scss/**/*.scss`, ['style:sass'])
  gulp.watch(`${args.src}/public/css/**/*.css`, ['style:css'])
  gulp.watch(`${args.src}/public/images/**/*.`, ['images'])
  gulp.watch(`${args.src}/routes/**/*.js`, ['routes', 'server'])
  gulp.watch(`${args.src}/views/**/*.jade`, ['views', 'server'])
  gulp.watch(`${args.src}/${args.vendor}.js`, [`${args.vendor}`, 'server'])
})
