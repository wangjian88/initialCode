var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');



gulp.task('jade', function() {
    return gulp.src('jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./html'));
});

gulp.task('less', function() {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

gulp.task("watch",function(){
	gulp.watch("./jade/*.jade",["jade"]);
	gulp.watch("./less/*.less",["less"]);
})