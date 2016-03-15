var gulp = require('gulp');
var loopbackAngular = require('gulp-loopback-sdk-angular');
 
gulp.task('default', function () {
	return gulp.src('./server/server.js')
    .pipe(loopbackAngular())
    .pipe(gulp.dest('./client'));
});
