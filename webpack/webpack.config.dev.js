const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.config.common");

const devConfig = {
  target: "web",

  mode: "development",
  devtool: "cheap-module-eval-source-map",

  entry: [
    "webpack-dev-server/client?http://localhost:3001",
    "webpack/hot/only-dev-server",
    path.resolve(__dirname, "../src/core/bootstrap.js")
  ],

  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "public")
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          // "angular-hot-loader", // TODO: find lib to hot reload the app
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        use: "html-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Template ng project",
      template: "public/index.html",
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(commonConfig, devConfig);
