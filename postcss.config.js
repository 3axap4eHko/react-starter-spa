module.exports = {
    plugins: [
        require('postcss-import')(),
        require('postcss-url')(),
        require('postcss-css-variables')(),
        require('postcss-cssnext')(),
        require('postcss-reporter')(),
        require('precss')()
    ]
};