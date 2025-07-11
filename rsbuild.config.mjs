import { pluginReact } from '@rsbuild/plugin-react';

export default {
  plugins: [pluginReact()],
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: './',
  html: {
    title: 'BarathKV - Portfolio',
  },
  devServer: {
    historyApiFallback: true,
  },
  build: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['postcss-loader'],
        type: 'css',
      },
      // Add other rules here as needed
    ],
  },
};