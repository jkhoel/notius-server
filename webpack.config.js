const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./dev/notius-server.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: "notius-server.bundle.js",
    sourceMapFilename: "notius-server.map"
  },

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
  ]
};
