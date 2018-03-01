const webpackMerge = require('webpack-merge');
const Path = require('path');
const { HashedModuleIdsPlugin } = require('webpack');
const Offline = require('offline-plugin');

const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  entry: {
    'index': Path.resolve(__dirname, '../src/app/index.js'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HashedModuleIdsPlugin(),
  ],
});