const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SourceMap } = require('module');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // hash will change on file change, good for browser caching
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    // auto open browser after running dev server
    open: true,
    // auto refresh browser on file changes
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Webpack App',
    filename: 'index.html',
    template: 'src/templates/template.html'
  }), 
  ],
};