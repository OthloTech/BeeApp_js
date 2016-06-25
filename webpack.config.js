require('babel-core/register');

const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  bundle: path.resolve(__dirname, 'app/src/main.js'),
  style: path.resolve(__dirname, 'app/styles/main.scss'),
  build: path.resolve(__dirname, 'app/build'),
  dev: path.resolve(__dirname, 'app/build/dev')
}

module.exports = {
  entry: {
    bundle: PATHS.bundle
  },
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [],
  devtool: 'source-map',
  devServer: {
    contentBase: PATHS.dev,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          //cacheDirectory: true,
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style','css','sass']
      }
    ]
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