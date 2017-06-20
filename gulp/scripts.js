const gulp = require('gulp');
const uglify = require('gulp-uglify');
const value = require('./lib/value');
const webpack = require('webpack');
const gulpif = require('gulp-if');
const gulp_webpack = require('gulp-webpack');
const gutil = require('gulp-util');
const named = require('vinyl-named');
const args = require('yargs').argv;
const plumber = require('gulp-plumber');

gulp.task('scripts', function(){
  return gulp.src(`${value.src}/public/js/**/*.js`)
  .pipe(plumber({
    errorHandler () {}
  }))
  .pipe(named())
  .pipe(gulp_webpack({
    devtool: args.sourcemaps ? 'inline-source-map' : false,
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
  .pipe(gulp.dest(`${value.dest}/public/js/`));
});
