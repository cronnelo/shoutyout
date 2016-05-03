var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')({ lazy: true });

var config = require('./gulp.config');

gulp.task('lint', function() {
  return gulp.src(config.alljs)
    .pipe($.print());
});


gulp.task('styles', function() {

});

gulp.task('clean', function() {
  del(config.alljs);
});

function log (msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}

gulp.task('default', ['lint']);
