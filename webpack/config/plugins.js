const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const paths = require('./paths')();

module.exports = (isDevelopment) => {
  const { extractCSS } = require('../plugins/extractTextPlugin')(isDevelopment);

  let plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        WHYDIDYOUUPDATE: JSON.stringify(process.env.WHYDIDYOUUPDATE),
      }}),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new BundleTracker({ filename: './webpack-stats.json' }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': isDevelopment ? JSON.stringify('development') :
          JSON.stringify('production')
      }
    }),
    new ImageminPlugin({
      // change to false to compress images even while webpack is in debug mode
      disable: true,
      pngquant: {
          quality: '75-90'
      },
      gifsicle: {
          optimizationLevel: 1
      },
      svgo: {},
      // add imagemin-mozjpeg plugin once
      // https://github.com/sindresorhus/execa/issues/61 is available...and
      // prob switch to image-webpack-loader
      plugins: []
    }),
    extractCSS,
  ];

  if (isDevelopment) {
    plugins = [
      ...plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new DashboardPlugin({
        minified: false,
        gzip: false
      }),
    ];
  } else {
    plugins = [
      new webpack.optimize.ModuleConcatenationPlugin(),
      ...plugins,
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true,
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      }),
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ];
  }

  if (process.env.analyzer) {
    plugins = [
      ...plugins,
      new BundleAnalyzerPlugin(),
      new DuplicatePackageCheckerPlugin({
        verbose: true
      })
    ];
  }

  if (!isDevelopment) {
    plugins = [
      ...plugins,
      new OfflinePlugin({
        safeToUseOptionalCaches: true,
        relativePaths: false,
        publicPath: '/dist/',

        caches: {
          main: [
            'vendor.js',
            'main.js',
            'vendor.css',
            'main.css',
          ],
          additional: [
            '*.woff',
            '*.woff2',
            '*.js',
            '*.css'
          ],
          optional: [
            ':rest:'
          ]
        },

        ServiceWorker: {
          events: true
        },
        AppCache: {
          caches: ['main', 'additional', 'optional'],
          events: true
        }
      })
    ];
  }

  return plugins;
};
