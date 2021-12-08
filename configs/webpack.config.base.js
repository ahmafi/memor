const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WebpackMerge = require("webpack-merge");

module.exports = {
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "..", "dist"),
  },
};
