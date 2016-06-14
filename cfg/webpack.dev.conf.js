var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {


  entry:"./src/main.js",
  output:{
    path:__dirname,
    filename:'../bundle.js'
  },
  // Modules
  module:{
    loaders:[

      {test:/\.css$/,loader:"style!css!"},
      {test:/\.scss$/,loader:"style!css!sass!"},
      {test:/\.less$/,loader:"style!css!less!"},
      //  Transpile file es6 files
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      // Files
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:"index.html",
      filename:'index.html',
      inject:true
    })
  ]
};
