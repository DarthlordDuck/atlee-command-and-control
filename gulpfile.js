var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('./src/tsconfig.json');

gulp.task('compile', function(){
    var tsResult = tsProject.src().pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('./'));
});

gulp.task('html-copy', function(){
    return gulp.src('src/components/**/*.html').pipe(gulp.dest('components/'));
});

gulp.task('watch', ['build'], function() {
    gulp.watch('src/**/*', ['build']);
});

gulp.task('build', ['compile', 'html-copy'], function(){});