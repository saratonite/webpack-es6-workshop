module.exports = {


  entry:"./src/main.js",
  output:{
    path:__dirname,
    filename:'../bundle.js'
  },
  // Modules
  module:{
    loaders:[

      {
        test:/\.css$/,loader:"style!css!"
      },
      //  Transpile file es6 files
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      // Files
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  }
};
