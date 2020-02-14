const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: '$18dux',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      "18dux": path.resolve(__dirname, 'src')
    }
  },
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development',
  devtool: 'sourceMap',
};
