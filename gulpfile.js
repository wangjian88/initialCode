var gulp = require("gulp");
var jade = require("gulp-jade");
var sass = require("gulp-sass");
var data = require('gulp-data');
var imagemin=require('gulp-imagemin');

gulp.task("jade",function  () {
	gulp.src("jade/*.jade")
	.pipe(data(function (file) {
      return require('./data.json');
    }))
	.pipe(jade({
		pretty:true
	}))
	.pipe(gulp.dest("html/"))
})
gulp.task("sass",function  () {
	gulp.src("sass/*.scss")
	.pipe(sass({
		pretty:true
	}))
	.pipe(gulp.dest("css/"))
})
gulp.task('watch',function  () {
	gulp.watch("sass/*.scss",['sass']);
    gulp.watch("jade/*.jade",['jade']);
    gulp.watch("./data.json",['jade']);
})
gulp.task('testImagemin', function () {
    gulp.src('img/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('image/'));
});