const webpack = require('webpack');
const _ = require('lodash');

const base = {
  entry: {
    main: './src/js/main',
    vendor: [
      'es6-promise/auto',
      'jquery',
      'lodash',
      'lory.js',
      'hammerjs',
      'js-cookie'
    ]
  },
  output: {
    filename: '[name].js'
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      // 'LIB_NAME$': 'DESTINATION',
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
  ]
};

const dev = _.assign({}, base);

const prod = _.assign({}, base,  {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
});

module.exports = {
  dev: dev,
  prod: prod
};
