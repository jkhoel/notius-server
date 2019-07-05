const MinifyPlugin = require("babel-minify-webpack-plugin");
const webpack = require("webpack");

const path = require("path");
const fs = require("fs");

const _SRC = "./src/notius-server.js";
const _FILENAME = `notius-server.min.js`;

var nodeModules = {};
fs
  .readdirSync("node_modules")
  .filter(function (x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  entry: _SRC,
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: _FILENAME,
    sourceMapFilename: "notius-server.map"
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new MinifyPlugin(),
  ],
  stats: "normal",
}
