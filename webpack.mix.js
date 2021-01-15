const mix = require('laravel-mix');
const webpack = require('webpack');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
require('vuetifyjs-mix-extension')

mix.webpackConfig(webpack => {
    return {
        plugins: [
            new VuetifyLoaderPlugin(),
            new webpack.ProvidePlugin({
                'window.Quill': 'quill',
                'Quill': 'quill'
            })
        ],
        resolve: {
            extensions: ['.js', '.vue'],
            alias: {
                '@': __dirname + '/resources'
            }
        }
    }
});



/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vuetify()
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();
