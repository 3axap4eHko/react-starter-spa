require('webpack');
const Os = require('os');
const Path = require('path');

const webpackConfig = require('./webpack/webpack.dev.config');
const tempDir = Path.join(Os.tmpdir(), '.karma_test_directory');
const isTravis = !!process.env.TRAVIS;
const singleRun = isTravis;
const autoWatch = !isTravis;

//process.env.CHROME_BIN = process.env.CHROME_BIN || 'c:\\bin\\chrome-win32\\chrome.exe';
//process.env.PHANTOMJS_BIN = process.env.PHANTOMJS_BIN || 'c:\\bin\\phantomjs\\bin\\phantomjs.exe';

module.exports = function (config) {
  config.set({
    browsers: [isTravis ? 'ChromeLauncherTravis' : 'ChromeLauncher'],
    customLaunchers: {
      ChromeLauncher: {
        base: 'Chrome',
        flags: ['--start-maximized', `--user-data-dir=${tempDir}`]
      },
      ChromeLauncherTravis: {
        base: 'Chrome',
        flags: ['--no-sandbox', '--start-maximized', `--user-data-dir=${tempDir}`]
      },
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
      //noInfo: true
    },
    colors: true,
    retryLimit: 10,
    concurrency: Infinity,
    autoWatch,
    singleRun,
  })
};
