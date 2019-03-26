var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')

gulp.task('css', gulp.series((done) => {
    gulp.src([
        "src/lib/styles/imports/fonts.scss",
        "src/lib/styles/imports/initiafy-font.scss",
        "src/lib/styles/imports/animations.scss",
        "src/lib/styles/imports/colors.scss",
        "src/lib/styles/theme/*.scss",
        "src/lib/styles/sass/*.scss",
        "src/lib/styles/base/*.scss",
        "src/lib/styles/components/*.scss",
        "src/lib/styles/help/*.scss"
    ])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./dist/lib/styles/'));
    done();
}));

gulp.task('copy', gulp.series((done) => {
    gulp.src("src/lib/styles/assets/fonts/*")
    .pipe(gulp.dest('./dist/lib/styles/'));
    done();
}));

gulp.task('default', gulp.series('css', 'copy'));