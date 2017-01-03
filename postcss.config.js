module.exports = {
    plugins: [
        require('postcss-import')(),
        require('postcss-url')(),
        require('postcss-cssnext')(),
        require('postcss-reporter')(),
        require('postcss-css-variables')(),
        require('precss')()
    ]
};