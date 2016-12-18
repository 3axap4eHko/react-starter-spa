// Karma configuration
// Generated on Wed Jun 08 2016 10:55:54 GMT-0400 (Eastern Daylight Time)

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

//process.env.CHROME_BIN = process.env.CHROME_BIN || 'c:\\bin\\chrome-win32\\chrome.exe';
//process.env.PHANTOMJS_BIN = process.env.PHANTOMJS_BIN || 'c:\\bin\\phantomjs\\bin\\phantomjs.exe';

module.exports = function (config) {
    config.set({
        browsers: ['Chromium'],
        customLaunchers: {
            Chromium: {
                base: 'Chrome',
                flags: ['--no-proxy-server', '--start-maximized', '-incognito']
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
            noInfo: true
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-jasmine'
        ],
        colors: true,
        retryLimit: 10,
        concurrency: Infinity,
        singleRun: true,
        autoWatch: false
    })
};
