const gulp = require('gulp');
const plumber = require('gulp-plumber');
const exec = require('child_process').exec;
 
let started = false;
 
gulp.task('start', (cb) => {
   
});
gulp.task('sync', (cb) => {
  exec('node run sync', (err, stdout, stderr) => {
    if (!started) {
      started = true;
      const npm = exec('npm start', {cwd: '../site'}, (err, stdout, stderr) => {
        cb(err);
      });
      npm.stdout.on('data', function(data) {
        console.log('npm: ', data);
      });
    }
    cb(err);
  });
});
gulp.task('watch', () => {
  gulp.watch(['../content/**/*.*'], ['sync']);
});
gulp.task('default', ['watch', 'sync']);