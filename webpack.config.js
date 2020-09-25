

const path = require('path')
const HTML = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: "./js/main.js",
    mode: 'development',
    output: {
        filename: "./js/main.js",
        path: path.resolve(__dirname, 'dist'),

    },
    plugins: [
        new HTML({
            template: "./index.html"
        }),
       // new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },

}