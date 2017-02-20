const Path = require('path');
const {DefinePlugin, optimize} = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractPostCss = new ExtractTextPlugin('css/[name].css');
const Html = require('html-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const WebpackPlugin = require('./webpack.plugin');
const Offline = require('offline-plugin');

module.exports = {
  entry: {
    'index': Path.resolve(__dirname, '../src/app/index.jsx'),
    'common': ['react', 'react-dom', 'react-router', 'redux', 'react-redux', 'immutable', 'react-helpful', 'reselect', 'react-intl', 'redux-thunk']
  },
  output: {
    path: Path.resolve(__dirname, '../build'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].js'
  },
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader', enforce: 'pre'},
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: ExtractPostCss.extract(['css-loader', 'postcss-loader'])},
      {test: /\.(svg|jpg|png|gif)$/, loader: 'file-loader', options: {name: 'images/[name].[ext]'}},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader', options: {name: 'fonts/[name].[ext]', limit: 5000, mimetype: 'application/font-woff'}},
      {test: /\.ttf$|\.eot$/, loader: 'file-loader', options: {name: 'fonts/[name].[ext]'}}
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new WebpackPlugin({
      clean: ['build', 'cache']
    }),
    new DefinePlugin({
      '__DEV__': JSON.stringify(false),
      'DEBUG': JSON.stringify(false),
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/common.js'
    }),
    new BabiliPlugin(),
    ExtractPostCss,
    new Offline({
      externals: ['/'],
      ServiceWorker: {
        output: 'js/sw.js',
      }
    }),
    new Html({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new Copy([
      {from: './src/vendor/', to: './vendor'}
    ])
  ]
};