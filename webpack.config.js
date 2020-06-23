const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack/base.config');
const envConfig = require(`./webpack/${process.env.NODE_ENV || 'development'}.config.js`);

module.exports = module.exports = webpackMerge(baseConfig, envConfig);
