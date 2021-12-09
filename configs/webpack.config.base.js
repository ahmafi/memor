const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '..', 'dist'),
  },
};
