var path = require('path');

module.exports = {
  entry: {
    bundle: './src/js/main.js'
  },
  output: {
    path: './dist',
    publicPath: '/dist',
    filename: '[name].js'
  },
  module: {// different file extension
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      test: /\.vue$/,
      loader: 'vue'
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url',
    },
    {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
    extensions: ['', '.js', '.vue']
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  eslint: {
    configFile: '.eslintrc'
  }
};

