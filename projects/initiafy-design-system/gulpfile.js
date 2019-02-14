var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var minify = require('gulp-minify-css')

gulp.task('default', gulp.series((done) => {
    gulp.src([
        "src/lib/styles/theme/*.scss",
        "src/lib/styles/sass/*.scss",
        "src/lib/styles/base/*.scss",
        "src/lib/styles/components/*.scss",
        "src/lib/styles/help/*.scss"
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(minify())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./dist/lib/styles/'));
    done();
}));