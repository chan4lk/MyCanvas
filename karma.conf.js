// Karma configuration
// Generated on Sat Sep 24 2016 10:32:09 GMT+0530 (Sri Lanka Standard Time)
var webpackConfig = require("./webpack.config");
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    /*
         * By default, Karma loads all sibling NPM modules which have a name
         * starting with karma-*. You can also explicitly list plugins you want
         * to load via the plugins configuration setting.
         */
    plugins: [
      'karma-*'
    ],


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon', 'es6-shim'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*.tsx'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.tsx': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    /*
         * This field is necessary because we are using webpack as a preprocessor.
         * You will need to specify the webpack configuration (although in this
         * case, we are simply leveraging the existing webpack.config.js file).
         *
         * If you have a different webpack.config.js file that's used for testing
         * purposes, you can specify that here.
         */
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    }
  })
}
