import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'distWebpack')
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
      ],
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(ttf|woff|woff2|eot)$/,
              use: ['file-loader'],
            },
            {
              test: /\.svg$/,
              use: ['svg-url-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
              }
          ],
    }
  };