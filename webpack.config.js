const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

// See http://jlongster.com/Backend-Apps-with-Webpack--Part-I

var nodeModules = {};
fs
  .readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  entry: "./dev/notius-server.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "notius-server.min.js",
    sourceMapFilename: "notius-server.map"
  },
  externals: nodeModules,

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ],
  devtool: 'sourcemap'
};
