module.exports = (isDevelopment) => {
  const { ExtractTextPlugin } = require('../plugins/extractTextPlugin')(isDevelopment);

  const module = {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          useRelativePath: !isDevelopment,
          name: '[name].[ext]?[hash]',
          limit: 20000,
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            useRelativePath: !isDevelopment,
            limit: 10000,
          },
        },
      },

      {
        test: /\.(less|config)/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'less-loader',
            },
          ],
        })
      },

      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'resolve-url-loader',
          ],
        }),
      },

      {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: [
                  {
                      loader: 'css-loader',
                      options: {
                          importLoaders: 2,
                          modules: false,
                      }
                  },
                  {
                      loader: 'resolve-url-loader'
                  },
                  {
                      loader: 'sass-loader',
                      options: {
                          sourceMap: true,
                          sassOptions: {
                            outputStyle: 'expanded',
                            sourceMapContents: true,
                          },
                      }
                  }
              ]
          })
      },
    ],
  };

  return module;
};
