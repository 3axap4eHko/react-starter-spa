const webpackMerge = require('webpack-merge');
const Path = require('path');
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');

const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    quiet: false,
    port: 9090,
    stats: 'errors-only'
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    Path.resolve(__dirname, '../src/app/dev.jsx'),
  ],
  plugins: [
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin()
  ]
});