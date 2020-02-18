const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
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
    new MiniCssExtractPlugin({ filename: 'style/[name].css' }),
  ],
  performance: {
    hints: false,
  },
}
