const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

var testFiles = ['test/**/*.js'];
var allFiles = ['test/**/*.js', 'lib/**/*.js', 'gulpfile.js'];

gulp.task('lint:all', () => {
  gulp.src(allFiles)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('mocha:test', () => {
  gulp.src(testFiles)
  .pipe(mocha());
});

gulp.task('watch:files', () => {
  gulp.watch(testFiles, ['mocha:test']);
  gulp.watch(allFiles, ['lint:all']);
});

gulp.task('default', ['lint:all', 'mocha:test', 'watch:files']);
