const webpack = require('webpack');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  extry: {
    app: '../index.js',
  },
  output: {
    path: resolve('dist'),
    filename: 'bunble.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
}