const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const config = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      }, {
        test: /\.(jsx?|js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
      },
    ],
  },
};

if (process.env.npm_lifecycle_event === ('dev' || 'test')) {
  config.output.publicPath = '/static/';
  config.devtool = 'eval';
  config.entry = [
    'whatwg-fetch',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ];
  config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      { from: 'images', to: './' },
    ]),
    new WriteFilePlugin(),
  ];
  config.externals = {
    'react/addons': 'true',
    'react/lib/ExecutionEnvironment': 'true',
    'react/lib/ReactContext': 'true',
  };
} else {
  config.output.publicPath = '/';
  config.devtool = 'cheap-module-source-map';
  // config.entry = ['whatwg-fetch', './src'];
  config.entry = {
    main: './src',
    vendor: 'react'
  };
  config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        sequences: true,
        properties: true,
        conditionals: true,
        join_vars: true,
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'production'",
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor' // Specify the common bundle's name.
    })
  ];
}

module.exports = config;
