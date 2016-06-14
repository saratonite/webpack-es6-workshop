var config = require("./config");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {


  entry:"./src/main.js",
  output:{
    path:__dirname,
    filename:config.distPath+'bundle.js'
  },
  // Modules
  module:{
    loaders:[

      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader","sass-loader") },
      //  Transpile file es6 files
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      // Files
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  plugins: [
        new ExtractTextPlugin("../dist/[name].css")
  ]
};
