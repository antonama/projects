var gulp = require('gulp');
var sass = require('gulp-sass');
var flatten = require('gulp-flatten');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var paths = {
    scss: ['./app/styles/**.scss', './app/styles/**.css'],
    css_temp: './.tmp/styles',
    css: './dist/styles',
    html: './app/**/*.html',
    js: './app/scripts/*.js'
};

gulp.task('sass-lr', function () {
    gulp.src(paths.scss)
        .pipe(plumber())
        .pipe(sass())
        .pipe(flatten())
        .pipe(gulp.dest(paths.css_temp))
        .pipe(livereload());
});

gulp.task('sass', function () {
    gulp.src(paths.scss)
        .pipe(sass())
        .pipe(flatten())
        .pipe(gulp.dest(paths.css))
});

gulp.task('watch', function() {
    gulp.watch(paths.scss, ['sass']);
});

gulp.task('lr', ['serve'], function () {

    livereload.listen();

    gulp.watch(paths.scss, ['sass-lr']);

    gulp.src([paths.html, paths.js])
        .pipe(watch())
        .pipe(plumber())
        .pipe(livereload());

});

gulp.task('default', ['sass']);

gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'))
        .use(connect.static('.tmp'))
        .use(connect.directory('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect'], function () {
    require('opn')('http://localhost:9000');
});