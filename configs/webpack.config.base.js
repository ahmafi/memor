const path = require('path');
const { isDevServer, isDevelopment } = require('./webpack.paths.envs');

module.exports = {
  devtool: 'inline-source-map',
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        {
          loader: 'ifdef-loader',
          options: {
            DEV_SERVER: isDevServer,
            DEVELOPMENT: isDevelopment,
          },
        }],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '..', 'dist'),
  },
};
