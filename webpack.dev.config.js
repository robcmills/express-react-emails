const path = require('path')

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/browser/index'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader?cacheDirectory=true',
      }
    }],
  },
}
