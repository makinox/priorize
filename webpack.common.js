const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
// const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Priorize',
      template: './src/template/template.html',
    }),
    new WebpackPwaManifest({
      name: 'Priorize',
      short_name: 'Priorize',
      description: 'Priorize - Jesus bossa',
      background_color: '#ffffff',
      crossorigin: 'anonymous',
      ios: true,
      icons: [
        {
          src: path.resolve('src/assets/Logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve('src/assets/Logo.png'),
          size: '1024x1024',
        },
        {
          src: path.resolve('src/assets/Logo.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
};
