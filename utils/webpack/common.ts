/* eslint-disable @typescript-eslint/naming-convention */
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import fs from 'fs';
import { resolve } from 'path';
import CopyPlugin from 'copy-webpack-plugin';

import params from '../../package.json';

const dir = process.cwd();

const getSrcAliasFolders = () =>
  fs
    .readdirSync(`${dir}/src`)
    .reduce(
      (acc, folder) => ({ ...acc, [folder]: `${dir}/src/${folder}` }),
      {}
    );

export default {
  entry: ['regenerator-runtime/runtime', `${dir}/src/app/index.tsx`],
  output: {
    filename: 'assets/js/bundle.js',
    path: resolve(dir, '../../public/'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
    alias: { ...getSrcAliasFolders() },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/app/template/index.html',
      filename: 'index.html',
      templateParameters(compilation, assets, options) {
        return {
          files: assets,
          options,
          webpack: compilation.getStats().toJson(),
          htmlWebpackPlugin: {
            options: {
              isProduction: process.env.NODE_ENV !== 'development',
            },
          },
        };
      },
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CopyPlugin({
      patterns: ['assets/img'].map(x => ({ from: `src/app/${x}`, to: x })),
    }),
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.(ts|tsx)$/,
      },
      // {
      //   loader: 'file-loader',
      //   test: /\.(png)?$/,
      //   options: {
      //     name: '[path][name].[ext]',
      //   },
      // },
    ],
  },
} as Configuration;
