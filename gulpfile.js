var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var merge = require('react/lib/merge');

var SRC = './src/**/*.js';

var defaultTasks = ['build'];

var webpackHandler = function (name, callback) {
  return function (err, stats) {
    if (err) {
      throw new gutil.PluginError(name, err);
    }
    gutil.log(name, stats.toString({
      hash: false,
      timings: false,
      assets: true,
      chunks: false,
      chunkModules: false,
      modules: false,
      children: false,
      colors: true
    }));
    callback();
  }
};

gulp.task('build:webpack', function (callback) {
  var config = merge(webpackConfig, {
    devtool: 'source-map'
  });
  webpack(config, webpackHandler('build:webpack', callback));
});

gulp.task('build', ['build:webpack']);

gulp.task('watch', defaultTasks, function () {
  gulp.watch(SRC, defaultTasks);
});

gulp.task('default', ['build']);
