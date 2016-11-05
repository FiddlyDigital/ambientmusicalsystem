const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('zip', () => {
    return gulp.src('dist/*')
        .pipe(zip('build.zip'))
        .pipe(gulp.dest('dist'));
});