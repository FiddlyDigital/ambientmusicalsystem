const gulp = require('gulp');
const child_exec = require('child_process').exec;

gulp.task('docs', (done) => {
    return child_exec('node ./node_modules/jsdoc/jsdoc.js --readme ./README.md -c ./jsdoc.json --verbose', undefined, done);
});