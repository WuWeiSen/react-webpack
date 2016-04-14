var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var webpack = require("webpack");

var webpackConfig = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/script/main.js')
    ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    hash: true
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'react-webpack',
    template: path.resolve(__dirname, 'build/_index.html'),
    inject: 'body'
  })],
  module: {
    loaders: [{
      test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      exclude: [nodeModulesPath],
      loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    },
    // SASS
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    },
    {
      test: /\.(png|woff|svg|ttf|eot)$/,
      loader: 'url?limit=100000'
    }]
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  plugins: [
    //压缩打包的文件
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        //supresses warnings, usually from module minification
        warnings: false
      }
    }),
    //允许错误不打断程序
    new webpack.NoErrorsPlugin()
    //把指定文件夹下的文件复制到指定的目录
    // new TransferWebpackPlugin([
    //   {from: 'build'}
    // ], path.resolve(__dirname,"src"))
  ]
};

module.exports = webpackConfig;
