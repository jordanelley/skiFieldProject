const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ROOT_DIR = path.resolve(__dirname, './');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');

module.exports = {
  entry: [
    './index.jsx',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'], // Process and embed css into the page
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|png|cur|gif)$/,
        loaders: ['url-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: DIST_DIR,
    filename: 'index.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'index.html', to: '.' },
        { from: './images/*', to: '.'}
      ],
    }),
  ],
  mode: 'development',
};
