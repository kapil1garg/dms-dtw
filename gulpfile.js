// gulp
var gulp = require('gulp');

// plugins
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

// lint JS
gulp.task('lint', function() {
  return gulp.src('*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

// watch for changes
gulp.task('watch', function() {
  gulp.watch('*.js', ['lint']);
});

// default task to run on gulp
gulp.task('default', [
  'lint',
  'watch'
]);
