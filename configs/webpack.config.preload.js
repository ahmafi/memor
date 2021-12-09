const { merge } = require('webpack-merge');
const BaseConfig = require('./webpack.config.base');

module.exports = merge(BaseConfig, {
  target: 'electron-preload',
  entry: {
    'home.preload': './src/renderer/home/preload.js',
    'popup.preload': './src/renderer/popup/preload.js',
  },
});
