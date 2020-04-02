const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (isDevelopment) => {
  const optimization = {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          minChunks: 3,
          test: path.resolve(__dirname, 'node_modules'),
          name: 'vendor',
          enforce: true
        }
      }
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: 'all',
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: true,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        }
      }),
    ],
  };

  return optimization;
};
