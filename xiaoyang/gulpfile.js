var gulp = require('gulp');
var postcss = require('gulp-postcss');
var px2rem = require('postcss-px2rem');

gulp.task('sass', function() {
    var processors = [px2rem({remUnit: 64})];
    return gulp.src('./css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});

gulp.task('watch',function  () {
	gulp.watch('./css/*.css',['sass'])
})
