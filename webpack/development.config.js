const webpackMerge = require('webpack-merge');
const Path = require('path');
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');

const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    hot: true,
    quiet: false,
    port: 9090,
    stats: 'errors-only'
  },
  entry: {
    app: Path.resolve(__dirname, '../src/app/dev.js')
  },
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
  ]
});
