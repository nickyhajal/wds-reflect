const gulp = require('gulp');
const plumber = require('gulp-plumber');
const exec = require('child_process').exec;


gulp.task('sync', (cb) => {
  exec('node run sync', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
gulp.task('watch', () => {
  gulp.watch(['../content/**/*.*'], ['sync']);
});
gulp.task('default', ['watch']);
