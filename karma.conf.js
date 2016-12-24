// Karma configuration
// Generated on Wed Jun 08 2016 10:55:54 GMT-0400 (Eastern Daylight Time)

require('webpack');
const Os = require('os');
const Path = require('path');

const webpackConfig = require('./webpack.config');
const tempDir = Path.join(Os.tmpdir(), `chrome-test`) ;

//process.env.CHROME_BIN = process.env.CHROME_BIN || 'c:\\bin\\chrome-win32\\chrome.exe';
//process.env.PHANTOMJS_BIN = process.env.PHANTOMJS_BIN || 'c:\\bin\\phantomjs\\bin\\phantomjs.exe';

module.exports = function (config) {
    config.set({
        browsers: ['ChromeLauncher'],
        customLaunchers: {
            ChromeLauncher: {
                base: 'Chrome',
                flags: ['--start-maximized', '-incognito', `--user-data-dir=${tempDir}`]
            },
        },
        frameworks: ['jasmine'],
        files: [
            './spec/_bootstrap.js'
        ],
        preprocessors: {
             './spec/_bootstrap.js': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            //noInfo: true
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-jasmine'
        ],
        colors: true,
        retryLimit: 10,
        concurrency: Infinity,
        singleRun: false,
        autoWatch: true
    })
};
