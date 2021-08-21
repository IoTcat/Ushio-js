var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css');

gulp.task('js', function () {
    return gulp.src('src/*.js')
        .pipe(gulp.dest('dist'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    return gulp.src('src/*.css')
        .pipe(gulp.dest('dist'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist'));
});

gulp.task('png', function () {
    return gulp.src('src/*.png')
        .pipe(gulp.dest('dist'));
});
gulp.task('default', gulp.series('js', 'css', 'png'));
