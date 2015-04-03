// var pkg = require('./package.json');
// var capabilities = require('./sauce_labs_capabilities.js').capabilities;

module.exports = function(config) {
  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'mocha', 'chai'],

    jspm: {
        // Edit this to your needs
        loadFiles: ['lib/**/*.spec.js'],
        serveFiles: ['lib/**/*.js', 'lib/**/*.css', 'lib/**/*.html', 'lib/**/*.json']
    },

    // list of files / patterns to load in the browser
    files: [
    ],

    // preprocessors: {
    //   'lib/**/*.js': ['coverage']
    // },
    // reporters: ['progress', 'coverage'],
    reporters: ['mocha'],

    // list of files to exclude
    exclude: [
    ],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    browserDisconnectTimeout: 10 * 1000, // 10s
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 2 * 60 * 1000, // 2m
    captureTimeout: 0,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox', 'Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  };

  // if(process.env.TRAVIS){
  //   configuration.customLaunchers = capabilities;
  //   configuration.browsers = Object.keys(capabilities);
  //   configuration.sauceLabs = {
  //       testName: pkg.name + ' unit test'
  //   }
  // }

  config.set(configuration);
};
