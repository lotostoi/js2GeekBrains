const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const isProduction = process.argv.join('').includes('production')
const nodeExt = require('webpack-node-externals')


module.exports = {

  context: path.resolve(__dirname),
  mode: 'production',
  entry: {
    index: './index.js',
  },
  output: {
    publicPath: '/',
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },

  resolve: {
    extensions: [ '.webpack.js', '.web.js', '.js', '.node'],
  },
  externals: [nodeExt()],

  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  optimization: {

    minimize: false,//isProduction,
    minimizer: [
      new TerserPlugin()
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname,'../frontend/dist'), to : 'static' },
      ],
    }),
    new webpack.DefinePlugin({     
      'process.isProduction': isProduction
    })
  ],

}