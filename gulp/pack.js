const packager = require('electron-packager');
const package = require('../package.json');
const gulp = require('gulp');
const args = require('./lib/value');
const del = require('del');

const options = {
  name: package['name'],
  dir: `${args.dest}`, // ソースフォルダのパス
  out: './release', // 出力先フォルダのパス
  appVersion: package['version'],
  // icon: undefined, // アイコンのパス
  platform: ['darwin', 'win32'], // プラットフォーム
  arch: 'x64', // 64bitか32bitか
  overwrite: true, // 上書きするか
  asar: true,
}

gulp.task('pack', ['build', 'package:move'], function (done) {
  del('release/**/*', packager(options, function (err, appPaths) {// 完了時のコールバック
    if (err) { console.log(err); }
    done();
  }));
})

gulp.task('package:move', function () {
  return gulp.src('package.json')
  .pipe(gulp.dest(`${args.dest}`))
})
