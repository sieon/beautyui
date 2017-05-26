'use strict';


var gulp = require('gulp');                        //获取gulp
var browsersync = require('browser-sync').create();//获取browsersync

//操作css文件
var cssnano = require('gulp-cssnano');    //css压缩插件
var less=require('gulp-sass')             //less文件编译
gulp.task('css', function() {
    gulp.src('assets/css/*.css')
        .pipe(sass())                     //编译less文件
        .pipe(cssnano())                  //css压缩
        .pipe(gulp.dest('assets/css'))
        .pipe(browsersync.stream());
});


gulp.task('serve', ['clean'], function() {
    gulp.start('scripts','style','image','html');
    browsersync.init({
        port: 2016,
        server: {
            baseDir: ['dist']
        }
    });
    gulp.watch('assets/js/*.js', ['scripts']);         //监控文件变化，自动更新
    gulp.watch('assets/css/*.css', ['style']);
    gulp.watch('assets/img/*.*', ['image']);
    gulp.watch('*.html', ['html']);
});

gulp.task('default',['serve']);
