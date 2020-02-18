const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~': path.resolve(__dirname, '../src'),
    },
  },
  output: {
    filename: 'static/js/bundle.js',
    path: path.resolve(__dirname, '../../../dist/client'),
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
    }),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, '../src/assets') }]),
  ],
  performance: {
    hints: false,
  },
}
