const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const angularTemplatecache = require('gulp-angular-templatecache');

const conf = require('../conf/gulp.conf');

gulp.task('partials', partials);

function partials() {
  return gulp.src(conf.path.src(conf.ngModule + '/**/*.html'))
    .pipe(htmlmin())
    .pipe(angularTemplatecache('templateCacheHtml.js', {
      module: conf.ngModule,
      root: conf.ngModule
    }))
    .pipe(gulp.dest(conf.path.tmp()));
}
