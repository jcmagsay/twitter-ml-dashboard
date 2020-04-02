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
                'test': /\.(html)$/,
                'exclude': /node_modules/,
                'use': {
                    'loader': 'html-loader',
                    'options': {
                        'minimize': true
                    }
                }
            },
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
                'test': /\.(js|jsx)$/,
                'use': [{
                    'loader': 'babel-loader'
                }],
                'exclude': /node_modules/
            },
            {
                'test': /\.(sass|scss|css)$/,
                'exclude': [/node_modules/],
                'use': [
                    // // fallback to style-loader in development
                    // process.env.NODE_ENV !== 'production'
                    //   // Creates `style` nodes from JS strings
                    //   ? 'style-loader'
                    //   : MiniCssExtractPlugin.loader,
                    // // Translates CSS into CommonJS
                    // {
                    //   loader: 'css-loader',
                    //   options: {
                    //     modules: true,
                    //     sourceMap: true,
                    //     importLoaders: 1,
                    //   }
                    // },
                    // // Compiles Sass to CSS
                    // 'sass-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    },
    'resolve': {
        'extensions': ['*', '.js', '.json', '.jsx', '.scss']
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
        'headers': {
            'Access-Control-Allow-Origin': '*'
        },
        'historyApiFallback': true,
        'port': 3000,
        'compress': false,
        'inline': true,
        'hot': true,
        'stats': {
            'assets': true,
            'children': false,
            'chunks': false,
            'hash': false,
            'modules': false,
            'publicPath': false,
            'timings': true,
            'version': false,
            'warnings': true,
            'reasons': false,
        }
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
