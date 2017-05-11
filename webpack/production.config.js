const webpackMerge = require('webpack-merge');
const Path = require('path');
const { optimize, HashedModuleIdsPlugin } = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const Offline = require('offline-plugin');

const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  entry: {
    'index': Path.resolve(__dirname, '../src/app/index.jsx'),
    'common': ['react', 'react-dom', 'react-router', 'redux', 'react-redux', 'react-helpful', 'react-intl', 'redux-thunk']
  },
  plugins: [
    new optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/common.js'
    }),
    new BabiliPlugin(),
    new Offline({
      externals: ['/'],
      ServiceWorker: {
        output: 'js/sw.js',
      }
    }),
    new HashedModuleIdsPlugin(),
    new Visualizer(),
  ]
});