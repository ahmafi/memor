const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const { spawn } = require('child_process');
const path = require('path');
const BaseConfig = require('./webpack.config.base');
const { isDevServer, DEV_PORT } = require('./webpack.paths.envs');

module.exports = merge(BaseConfig, {
  target: ['electron-renderer', ...isDevServer ? ['web'] : []],
  entry: {
    home: './src/renderer/home/home.jsx',
    popup: './src/renderer/popup/popup.jsx',
  },
  devServer: {
    port: DEV_PORT,
    hot: true,
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    static: {
      publicPath: '/',
      directory: path.join(__dirname, '..', 'dist'),
    },
    onBeforeSetupMiddleware() {
      console.log('Starting Main Process...');
      spawn('npm', ['run', 'start:main'], {
        shell: true,
        env: process.env,
        stdio: 'inherit',
      })
        .on('close', (code) => process.exit(code))
        .on('error', (spawnError) => console.error(spawnError));
    },
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
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
});
