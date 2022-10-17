const path = require("path");
const webpack = require("webpack");

const devServerPort = 3000;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env"] },
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    port: devServerPort,
    open: {
      app: {
        name: "firefox",
      },
    },
    client: { logging: "warn" },
    hot: true,
  },
};
