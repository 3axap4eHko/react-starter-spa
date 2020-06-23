const Path = require('path');
const { HashedModuleIdsPlugin } = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    'index': Path.resolve(__dirname, '../src/app/index.tsx'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HashedModuleIdsPlugin(),
  ],
};
