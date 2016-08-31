const path = require('path')
const {resolve} = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackValidator = require('webpack-validator')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')
const OfflinePlugin = require('offline-plugin')



module.exports = {
  entry: ["./app.js"],
  output: {
    filename: "./public/bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'display-rainfall demo'
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: ['react-hot-loader', 'babel-loader'],
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }

}