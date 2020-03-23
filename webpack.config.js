const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  'devtool': 'source-map',
  'entry': './src/index.js',
  'output': {
    'path': path.resolve('public/assets'),
    'publicPath': process.env.NODE_ENV === 'production' ? '/assets/' : '/',
    'filename': 'bundle.js'
  },
  'module': {
    'rules': [
      {
        'test': /\.js$/,
        'exclude': [/node_modules/],
        'use': [
          {
            'loader': 'babel-loader',
            'options': {
              'presets': [
                '@babel/preset-env'
              ]
            }
          }
        ]
      },
      {
        'test': /\.jsx$/,
        'use': [{
          'loader': 'babel'
        }],
        'exclude': /node_modules/
      },
      {
        'test': /\.(sass|scss)$/,
        'exclude': [/node_modules/],
        'use': [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      }
    ]
  },
  'resolve': {
    // 'alias': {
    //   'atoms': path.resolve(__dirname, 'src/js/atoms'),
    //   'data': path.resolve(__dirname, 'data'),
    //   'ecosystems': path.resolve(__dirname, 'src/js/ecosystems'),
    //   'js': path.resolve(__dirname, 'src/js/'),
    //   'molecules': path.resolve(__dirname, 'src/js/molecules'),
    //   'routes': path.resolve(__dirname, 'src/routes'),
    //   'styles': path.resolve(__dirname, 'src/assets/styles')
    // },
    'extensions': ['.js', '.json', '.jsx', '.scss']
  },
  'resolveLoader': {
    'moduleExtensions': ['-loader']
  },
  'plugins': [
    HtmlWebpackPluginConfig,
    new webpack.LoaderOptionsPlugin({
      'options': {
        'postcss': [
        ]
      }
    })
  ],
  'devServer': {
    'historyApiFallback': true
  }
}
