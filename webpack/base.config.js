const Path = require('path');
const { DefinePlugin } = require('webpack');
const Html = require('html-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  output: {
    path: Path.resolve(__dirname, '../build'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[hash].[chunkhash].js',
  },
  module: {
    rules: [
      //{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader', enforce: 'pre' },
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/, options: { logInfoToStdOut: true, logLevel: 'info' } },
      { test: /\.(svg|jpg|png|gif)$/, loader: 'file-loader', options: { name: 'images/[name].[ext]' } },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: { name: 'fonts/[name].[ext]', limit: 5000, mimetype: 'application/font-woff' },
      },
      { test: /\.ttf$|\.eot$/, loader: 'file-loader', options: { name: 'fonts/[name].[ext]' } },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  performance: {
    hints: 'warning', // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
  },
  plugins: [
    new DefinePlugin({
      'DEBUG': JSON.stringify(!!process.env.DEBUG),
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new Html({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new Copy({
      patterns: [
        { from: './src/favicon.ico', to: './' },
      ]
    }),
    new Visualizer({
      filename: './statistics.html',
    }),
  ],
};
