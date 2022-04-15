const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // hash will change on file change, good for browser caching
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    //wipe out dist folder on build so files don't pile up
    clean: true,
    //keep asset names as is
    assetModuleFilename: '[name][ext]',
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Webpack App',
    filename: 'index.html',
    template: 'src/templates/template.html'
  }), 
  new ESLintPlugin(),  
],
};