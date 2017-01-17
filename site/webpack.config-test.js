const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');

const isDebug = global.DEBUG === false ? false : !process.argv.includes('--release');
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');
const babelConfig = Object.assign({}, pkg.babel, {
  babelrc: false,
});

// Webpack configuration (main.js => public/dist/main.{hash}.js)
// http://webpack.github.io/docs/configuration.html
const config = {

  // The base directory for resolving the entry option
  context: __dirname,

  externals: [nodeExternals()],

  target: 'node',

  // The entry point for the bundle
  entry: [
    './main.js',
  ],

  // Switch loaders to debug or release mode
  debug: isDebug,

  // Developer tool to enhance debugging, source maps
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: isDebug ? 'source-map' : false,

  // The list of plugins for Webpack compiler
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"test"',
      __DEV__: isDebug,
    }),
  ],

  // Options affecting the normal modules
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, './components'),
          path.resolve(__dirname, './actions'),
          path.resolve(__dirname, './utils'),
          path.resolve(__dirname, './store'),
          path.resolve(__dirname, './test'),
          path.resolve(__dirname, './containers'),
          path.resolve(__dirname, './reducers'),
          path.resolve(__dirname, './core'),
          path.resolve(__dirname, './pages'),
          path.resolve(__dirname, './main.js'),
          path.resolve(__dirname, './constants.js'),
        ],
        loader: `babel-loader?${JSON.stringify(babelConfig)}`,
      },
      {
        test: /\.global\.css$/,
        loaders: [
          `css-loader?${JSON.stringify({
            sourceMap: isDebug,
          })}`,
        ],
      },
      {
        test: /^((?!\.global).)*\.css$/,
        loaders: [
          `css-loader?${JSON.stringify({
            sourceMap: isDebug,
            // CSS Modules https://github.com/css-modules/css-modules
            modules: true,
            localIdentName: isDebug ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
          })}`,
        ],
      },
      {
        test: /\.md$/,
        loader: path.resolve(__dirname, './utils/markdown-loader.js'),
      },
    ],
  },
}

module.exports = config;
