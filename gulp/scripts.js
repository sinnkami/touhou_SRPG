const gulp = require('gulp');
const uglify = require('gulp-uglify');
const args = require('./lib/value');
const webpack = require('webpack');
const gulpif = require('gulp-if');
const gulp_webpack = require('gulp-webpack');
const gutil = require('gulp-util');
const named = require('vinyl-named');

const plumber = require('gulp-plumber');

gulp.task('scripts', function(){
  return gulp.src(`${args.src}/public/js/**/*.js`)
  .pipe(plumber({
    errorHandler () {}
  }))
  .pipe(named())
  .pipe(gulp_webpack({
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: "babel-loader"
        }
      ]
    }
  },
  webpack,
  (err, stats) => {
    if (err) return
    gutil.log(`Finished '${gutil.colors.cyan('scripts')}'`, stats.toString({
      chunks: false,
      colors: true,
      cached: false,
      children: false
    }))
  }))
  .pipe(gulpif(args.compression, uglify().on('error', function(err) {
    gutil.log(gutil.colors.red('[Error]'), err.toString());
    this.emit('end');
  })))
  .pipe(gulp.dest(`${args.dest}/public/js/`));
});
