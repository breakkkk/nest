/*
 * @Author: 南靳
 * @Date: 2023-12-02 11:18:53
 * @LastEditors: 南靳
 * @LastEditTime: 2023-12-02 11:36:58
 * @FilePath: /nest-demo/webpack-hmr.config.js
 * @Description:
 */
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const run = require('run-script-webpack-plugin');

module.exports = function (options) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    watch: true,
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      new run.RunScriptWebpackPlugin({
        name: options.output.filename,
      }),
    ],
  };
};
