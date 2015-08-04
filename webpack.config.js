var webpack = require("webpack");


module.exports = {
  entry: ["webpack/hot/dev-server", "./index.js"],
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel" },
      { test: /\.css$/, loader: "style!css!postcss" }
    ]
  },
  postcss: [
    require("autoprefixer-core")()
  ]
};
