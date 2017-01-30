require('webpack');

const webpackConfig = require('./webpack/webpack.dev.config');
const isTravis = !!process.env.TRAVIS;
const singleRun = isTravis;
const autoWatch = !isTravis;

//process.env.CHROME_BIN = process.env.CHROME_BIN || 'c:\\bin\\chrome-win32\\chrome.exe';
//process.env.PHANTOMJS_BIN = process.env.PHANTOMJS_BIN || 'c:\\bin\\phantomjs\\bin\\phantomjs.exe';

module.exports = function (config) {
  config.set({
    browsers: ['ChromeLauncher'],
    customLaunchers: {
      ChromeLauncher: {
        base: 'Chrome',
        flags: ['--incognito', '--no-sandbox']
      }
    },
    frameworks: ['mocha'],
    files: [
      './test/*.js'
    ],
    preprocessors: {
      './test/*.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    colors: true,
    retryLimit: 10,
    concurrency: Infinity,
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    autoWatch,
    singleRun,
  })
};
