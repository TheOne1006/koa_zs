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
        browser: 'google chrome',
        notify: false,
        port: 5000
    });
});


gulp.task('nodemon', function (cb) {
    $.nodemon({
        script: './app.js',
        ignore:['README.md', 'node_modules/**', '.DS_Store', 'gulpfile.js', 'public/**','test/**'],
        ext: 'js',
    }).on('start', function () {

        setTimeout(cb, 1000);
    }).on('restart', function () {
        // 延迟1000s 执行
        setTimeout(reload, 1000);
    });
});

gulp.task('watch-reload', function () {
    gulp
        .watch(['theme/*.ejs','public/css/*.*'])
        .on('change', reload);
});
//dev task end

gulp.task('serve', ['browser-sync', 'watch-reload'], function () {

});
