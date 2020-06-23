const Path = require('path');
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true,
    historyApiFallback: true,
    port: 9090,
    stats: 'errors-only'
  },
  entry: {
    app: Path.resolve(__dirname, '../src/app/index.dev.tsx')
  },
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
  ]
};
