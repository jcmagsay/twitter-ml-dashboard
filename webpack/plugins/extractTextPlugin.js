const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (isDevelopment) => {
  // const extractCSS = new ExtractTextPlugin('[name].css');
  const extractCSS = new ExtractTextPlugin({filename: '[name].css', disable: false, allChunks: true});

  return {extractCSS, ExtractTextPlugin};
}
