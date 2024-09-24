let mix = require('laravel-mix');
// let webpack = require('webpack');
// mix.webpackConfig({
//   plugins: [
//     new webpack.DefinePlugin({
//         __VUE_PROD_DEVTOOLS__: 'false',
//         __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
//     })
//   ]
// });
mix.js('src/app.js', 'assets/js')

  .sass('src/app.scss', 'assets/css')
