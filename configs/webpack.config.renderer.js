const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const BaseConfig = require('./webpack.config.base');

module.exports = merge(BaseConfig, {
  target: 'electron-renderer',
  entry: {
    home: './src/renderer/home/home.js',
    popup: './src/renderer/popup/popup.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'home.bundle.html',
      chunks: ['home'],
      template: './src/renderer/home/template.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'popup.bundle.html',
      chunks: ['popup'],
      template: './src/renderer/popup/template.html',
    }),
  ],
});
