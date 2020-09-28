

const path = require('path')
const HTML = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  // runtimeCompiler: true,
  entry: "./js/main.js",
  mode: 'development',
  output: {
    filename: "./js/main.js",
    path: path.resolve(__dirname, 'dist'),

  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
  },
 

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: './css/[name].css',
      chunkFilename: './css/[id].css',
    }),
    new HTML({
      template: "./index.html"
    }),
  ],
  

}