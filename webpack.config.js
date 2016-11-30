const webpack = require('webpack');
const _ = require('lodash');

const base = {
  entry: {
    main: './src/js/main',
    vendor: [
      'es6-promise/auto',
      'jquery',
      'vue',
      'vuex',
      'vue-router',
      'lodash',
      'paper',
      'gsap',
      'preloadjs',
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
      'vue$': 'vue/dist/vue.js',
      'preloadjs$': 'createjs-preloadjs/lib/preloadjs-0.6.2.combined.js'
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
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  }
};

const dev = _.assign({}, base);

const prod = _.assign({}, base,  {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js'),
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
