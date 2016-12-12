var path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: './dist',
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {// different file extension
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
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

