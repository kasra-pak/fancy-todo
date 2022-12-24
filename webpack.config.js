const path = require("path");

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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, 'src/components/'),
      "@layouts": path.resolve(__dirname, 'src/layouts/'),
      "@assets": path.resolve(__dirname, 'src/assets/')
    }
  },
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
