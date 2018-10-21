const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    hot:true,
    // noInfo: true,
    stats: 'minimal'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
});
