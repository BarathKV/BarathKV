import { pluginReact } from '@rsbuild/plugin-react';

export default {
  plugins: [pluginReact()],
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