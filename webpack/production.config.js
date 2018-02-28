const webpackMerge = require('webpack-merge');
const Path = require('path');
const { optimize, HashedModuleIdsPlugin } = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const Offline = require('offline-plugin');

const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  entry: {
    'index': Path.resolve(__dirname, '../src/app/index.js'),
    'common': [
      'react',
      'react-dom',
      'react-steersman',
      'redux',
      'react-redux',
      'redux-thunk',
    ],
  },
  plugins: [
    new optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/common.js',
    }),
    new MinifyPlugin(),
    new Offline({
      externals: ['/'],
      ServiceWorker: {
        output: 'js/sw.js',
      },
    }),
    new HashedModuleIdsPlugin(),
    new Visualizer(),
  ],
});