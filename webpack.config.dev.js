var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve(__dirname, './client/src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, './client/public/dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(css|scss)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
