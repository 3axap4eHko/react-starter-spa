const Path = require('path');
const {DefinePlugin, optimize} = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractPostCss = new ExtractTextPlugin('css/[name].css');
const Html = require('html-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const Offline = require('offline-plugin');

module.exports = {
    devtool: 'source-map',
    devServer: {
        quiet: false,
        stats: {colors: true},
    },
    entry: {
        'index' : Path.resolve(__dirname, './src/app/index.jsx')
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
            { test: /\.css$/, loader: ExtractPostCss.extract(['css-loader', 'postcss-loader']) },
            { test: /\.(svg|jpg|png|gif)$/, loader: 'file-loader', query: { name: 'images/[hash].[ext]' } },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader', query: { name: 'fonts/[hash].[ext]', limit: 5000, mimetype: 'application/font-woff' } },
            { test: /\.ttf$|\.eot$/, loader: 'file-loader', query: { name: 'fonts/[hash].[ext]' } }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new DefinePlugin({
            '__DEV__': true,
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
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
            {from: './src/favicon.ico', to: './'},
            {from: './src/vendor/', to: './vendor'},
        ])
    ]
};