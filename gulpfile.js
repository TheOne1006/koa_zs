var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var $ = require('gulp-load-plugins')();

var path = {
    config: 'config/',
    routers: 'routers/'
};

gulp.task('browser-sync', ['nodemon'], function () {
    browserSync.init(null, {
        proxy: 'http://localhost:3000',
        files: ['public/**/*.*'],
        browser: 'google chrome',
        notify: false,
        port: 5000
    });
});


gulp.task('nodemon', function (cb) {
    var called = false;

    return $.nodemon({
        script: 'app'
    }).on('start', function () {
        if (!called) {
            cb();
            called = true;
        }
    });
});
//dev task end

gulp.task('serve', ['browser-sync'], function () {

});
