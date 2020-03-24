const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

module.exports = {
  'devtool': 'source-map',
  'entry': './src/index.js',
  'output': {
    'filename': 'bundle.js',
    'chunkFilename': '[name].bundle.js',
    'publicPath': process.env.NODE_ENV === 'production' ? '/assets/' : '/',
    'path': path.resolve('public/assets'),
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
        'test': /\.(sass|scss|css)$/,
        'exclude': [/node_modules/],
        'use': [
          'style-loader',
          MiniCssExtractPlugin.loader,
          // Creates `style` nodes from JS strings
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',        ]
      }
    ]
  },
  'resolve': {
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
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ],
  'devServer': {
    'historyApiFallback': true
  },
  'optimization': {
    'splitChunks': {
      'cacheGroups': {
        'fooStyles': {
          'name': 'foo',
            'test': (m, c, entry = 'foo') =>
              m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
              'chunks': 'all',
                'enforce': true,
        },
        'barStyles': {
          'name': 'bar',
          'test': (m, c, entry = 'bar') =>
              m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          'chunks': 'all',
          'enforce': true,
        },
      },
    },
  }
}
