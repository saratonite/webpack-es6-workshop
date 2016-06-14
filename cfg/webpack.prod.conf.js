var config = require("./config");
var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {


  entry:"./src/main.js",
  output:{
    path:path.resolve(__dirname, '../dist'),
    filename:'bundle.js'
  },
  // Modules
  module:{
    loaders:[

      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader","sass-loader") },
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader","less-loader") },
      //  Transpile file es6 files
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      // Files
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  plugins: [
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
          template:"index.html",
          filename:path.resolve(__dirname, '../dist/index.html'),
        })
  ]
};
