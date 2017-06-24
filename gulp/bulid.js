const gulp = require('gulp');
const gulp_sequence = require('gulp-sequence');
const args = require('./lib/value');

gulp.task('build', (callback) => {
  if (args.vendor === "express"){
    return gulp_sequence(
      'reset',[
        'bin',
        'public',
        'routes',
        'views',
        'express'
      ],
      'server',
      'watch:express',
      callback
    )
  }else if (args.vendor === "electron") {
    return gulp_sequence(
      'reset',[
        'public',
        'views',
        'electron'
      ],
      'watch:electron',
      callback
    )
  }
});
