const path = require('path')
const BUILD_DIR = path.join(__dirname, '/')
const APP_DIR = path.join(__dirname, '/src/')
const webpack = require('webpack')

module.exports = {
  entry: APP_DIR + 'index.js',
  output: {
    filename: 'index.js',
    path: BUILD_DIR,
    library: 'bloom-converters',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env'],
          'plugins': [
            'transform-object-rest-spread',
            'transform-class-properties'
          ]
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true })
  ],

  resolve: {
    extensions: ['.jsx', '.js']
  }
}
