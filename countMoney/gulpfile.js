var gulp = require('gulp');
var postcss = require('gulp-postcss');
var px2rem = require('postcss-px2rem');
var less = require('gulp-less');
gulp.task('default', function() {
    var processors = [px2rem({remUnit: 64})];
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});


gulp.task('watch', function() {
	gulp.watch('./less/*.less',['default']);
})