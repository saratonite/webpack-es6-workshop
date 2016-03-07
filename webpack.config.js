module.exports = {


  entry:"./main.js",
  output:{
    path:__dirname,
    filename:'bundle.js'
  },
  // Modules
  module:{
    loaders:[

      {
        test:/\.css$/,loader:"style!css!"
      },
      //  Transpile file es6 files
      { test: /\.es6$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};
