const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {  
  build: path.join(__dirname, 'build')
}

module.exports = {
  entry: {
    bundle: './api/src/server.js'
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
      }
    ]
  }
}
// , {
//   entry: {
//     style: './app/styles/main.js'
//   },
//   output: {
//     path: path.resolve(ROOT_PATH, 'app/build'),
//     filename: '[name].css'
//   },
//   module: {
//     loader: [
//       {
//         test: /\.css$/,
//         loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
//       },
//       {
//         test: /\.scss$/,
//         loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
//       }
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin('[name].css')
//   ]
// }]