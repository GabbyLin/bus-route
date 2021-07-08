const gulp = require('gulp');
const path = require('path');
const sourcemaps = require('gulp-sourcemaps');
const gulpPlumber = require('gulp-plumber');



const fontSource = 'src/fonts/*';
const fileSource = 'src/files/*';
const jsonSource = 'src/api/*';

const SOURCE = [
    fontSource,
    fileSource,
    jsonSource,
    '!*src/fonts/**/_*',
    '!*src/files/**/_*',
    '!*src/api/**/_*'
];


module.exports = function gulpFont(){
    return gulp.src(fontSource)
        .pipe(gulp.dest('dist/fonts'))

}