const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const BaseConfig = require("./webpack.config.base");

module.exports = merge(BaseConfig, {
  target: "electron-main",
  entry: {
    main: "./src/main/main.js",
    "home.preload": "./src/renderer/home/preload.js",
    "popup.preload": "./src/renderer/popup/preload.js",
  },
});
