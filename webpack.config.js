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
      'js-cookie',
      'object-fit-images'
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
        loader: 'babel-loader'
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

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor' // Specify the common bundle's name.
  })
];

const dev = Object.assign({}, base, {
  plugins: [].concat(plugins)
});

const prod = Object.assign({}, base,  {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ].concat(plugins).reverse(),
  stats: {
    assets: true
  }
});

module.exports = {
  dev: dev,
  prod: prod
};
