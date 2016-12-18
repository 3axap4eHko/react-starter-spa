const Path = require('path');
const {DefinePlugin, optimize} = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractPostCss = new ExtractTextPlugin('css/[name].css');
const Html = require('html-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const Offline = require('offline-plugin');

module.exports = {
    entry: {
        'index' : Path.resolve(__dirname, './src/app/index.jsx'),
        'common': ['react', 'react-dom', 'react-router', 'redux', 'react-redux', 'immutable', 'react-snippets', 'reselect', 'react-intl', 'redux-thunk']
    },
    output: {
        path: Path.join(__dirname, 'build'),
        filename: `./js/[name].js`,
        chunkFilename: `./js/[id].js`
    },
    module: {
        preLoaders: [
            { test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/ },
        ],
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.css$/, loader: ExtractPostCss.extract(['css-loader', 'postcss-loader']) }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new DefinePlugin({
            '__DEV__': false,
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new optimize.DedupePlugin(),
        new optimize.OccurenceOrderPlugin(),
        new optimize.CommonsChunkPlugin('common', 'js/common.js'),
        new optimize.UglifyJsPlugin({
            sourceMap: false,
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        ExtractPostCss,
        new Offline({
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