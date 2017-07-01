const gulp = require('gulp');
const uglify = require('gulp-uglify');
const args = require('./lib/value');
const webpack = require('webpack');
const gulpif = require('gulp-if');
const gulp_webpack = require('gulp-webpack');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const named = require('vinyl-named');

const plumber = require('gulp-plumber');

gulp.task('scripts', function(){
  return gulp.src(`${args.src}/public/js/**/*.js`)
  .pipe(plumber({
    errorHandler () {}
  }))
  .pipe(gulpif(args.vendor === "express", named()))
  .pipe(gulpif(args.vendor === "express", gulp_webpack({
    target: "node",
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
  })))
  .pipe(gulpif(args.vendor === "electron", babel({
    presets: ['es2015']
  })))
  .pipe(gulpif(args.compression, uglify().on('error', function(err) {
    gutil.log(gutil.colors.red('[Error]'), err.toString());
    this.emit('end');
  })))
  .pipe(rename(function(path){
    path.dirname = ".";
  }))
  .pipe(gulp.dest(`${args.dest}/public/js/`));
});
