

const path = require('path')
const HTML = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: "./js/main.js",
    another: "./js/vue.js",
  },
  output: {
    publicPath: '/',
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // extensions: [".js"],
    alias: {
      vue: 'vue/dist/vue.js',
      "~": path.resolve(__dirname, "src"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new HTML({
      template: "./index.html"
    }),
    new CopyPlugin({
      patterns: [
        { from: '.htaccess' },
      ],
    }),
  ],
  // devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: './dist',
    historyApiFallback: true
  },
}