const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  bundle: path.join(__dirname, 'app/src/main.js'),
  style: path.join(__dirname, 'app/styles/main.scss'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  entry: {
    bundle: PATHS.bundle
  },
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Listlogs'
    })
  ],
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style','css','sass']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
} 
// {
//   entry: {
//     style: PATHS.style
//   },
//   output: {
//     path: PATHS.build,
//     filename: 'main.css'
//   },
//   module: {
//     loader: [
//       {
//         test: /\.css$/,
//         loader: 'style!css'
//       },
//       {
//         test: /\.scss$/,
//         loader: ["style", "css", "sass"]
//       }
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin('main.scss')
//   ]
// }]