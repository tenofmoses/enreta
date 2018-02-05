const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline',
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
    },
    {
        test: /\.png$/,
        loaders: [
            'url-loader?limit=5000',
            'image-webpack-loader'
        ]
    }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
