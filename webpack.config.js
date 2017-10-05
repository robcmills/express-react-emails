const path = require('path')

module.exports = {
  devtool: 'cheap-eval-source-map',
  // devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/browser/index'
    ]
  },
  // target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
    // publicPath: '/'
    // libraryTarget: 'commonjs2'
  },
  // externals: /^[a-z\-0-9]+$/,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // loader: 'babel-loader?cacheDirectory=false'
        use: {
          loader: 'babel-loader?cacheDirectory=true',
          // options: {
          //   presets: ['env', 'react'],
          // }
        }
      }
    ]
  }
  // resolveLoader: {
  //   modules: [path.resolve(__dirname, 'node_modules'), __dirname]
  // }
}
