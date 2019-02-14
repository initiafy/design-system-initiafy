var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var minify = require('gulp-minify-css')

gulp.task('default', gulp.series((done) => {
    gulp.src([
        "projects/initiafy-design-system/src/lib/styles/theme/*.scss",
        "projects/initiafy-design-system/src/lib/styles/sass/*.scss",
        "projects/initiafy-design-system/src/lib/styles/base/*.scss",
        "projects/initiafy-design-system/src/lib/styles/components/*.scss",
        "projects/initiafy-design-system/src/lib/styles/help/*.scss"
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(minify())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('src/assets/styles/'));
    done();
}));