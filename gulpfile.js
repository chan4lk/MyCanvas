/// <binding BeforeBuild='min' Clean='clean' />
"use strict";

var gulp = require("gulp");
var rimraf = require("rimraf");
var $ = require("gulp-load-plugins")({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

var paths = {
    webroot: "./"
};
paths.src = paths.webroot + 'src/*.ts';
paths.dist = paths.webroot + 'dist/';
paths.css = paths.webroot + "css/";

paths.cssDest = paths.dist + "css/app.css";
paths.cssMin = paths.dist + "css/app.min.css";
paths.cssFabric = './node_modules/office-ui-fabric/dist/css/fabric.css';
paths.cssFabricComponents = './node_modules/office-ui-fabric/dist/css/fabric.components.css';

gulp.task("clean:css", function (cb) {
    rimraf(paths.dist + 'css/*.css', cb);
});

gulp.task("clean:js", function (cb) {
    rimraf(paths.dist + 'js/*.*', cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("copy:css", function () {
    return gulp.src([paths.cssFabric, paths.cssFabricComponents])
               .pipe(gulp.dest(paths.css));
});

gulp.task("min:css", ["clean:css"], function () {
    return gulp.src([paths.css + "*.css"])
        .pipe($.concat(paths.cssDest))
        .pipe(gulp.dest('./'))
        .pipe($.cssmin())
        .pipe($.rename({suffix: '.min'}))
        .pipe(gulp.dest('./'));
});

gulp.task('min:js', ['clean:js'], function () {
    return gulp.src(paths.src)
		.pipe($.webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('./'));

});

gulp.task("min", ["min:js", "min:css"]);

gulp.task('watch', ['min:js'], function () {
	gulp.watch('src/**/*.ts', ['min:js']);
	gulp.watch('css/**/*.css', ['min:css']);
});

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
    gulp.watch("dist/**/*.js").on("change", reload);
    gulp.watch("dist/**/*.css").on("change", reload);
});

gulp.task('build', ['min']);
gulp.task('default', ['watch', 'serve']);
