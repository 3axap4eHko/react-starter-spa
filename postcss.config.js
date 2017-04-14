const plugins = [
  require('postcss-import')(),
  require('postcss-url')(),
  require('postcss-cssnext')({
    browsers: ['last 2 versions'],
  }),
  require('postcss-css-variables')(),
  require('precss')()
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(...[
      require('css-mqpacker')(),
      require('cssnano')({
        autoprefixer: false,
        reduceIdents: false,
      }),
    ]);
}

plugins.push(...[
  require('postcss-reporter')(),
]);

module.exports = {
    plugins
};