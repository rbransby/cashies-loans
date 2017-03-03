const webpack = require('webpack');

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
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      },
      {
        test: require.resolve('jquery'),
        use: [
          'expose-loader?jQuery',
          'expose-loader?$',
        ],
      }
    ]
  }
};

const dev = Object.assign({}, base, {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // Specify the common bundle's name.
    })
  ]
});

const prod = Object.assign({}, base,  {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // Specify the common bundle's name.
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});

module.exports = {
  dev: dev,
  prod: prod
};
