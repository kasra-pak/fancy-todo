const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const devServerPort = 5000;

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.tsx",
    mode: isProduction ? "production" : "development",
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /(node_modules)/,
          use: "ts-loader",
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "@components": path.resolve(__dirname, "src/components/"),
        "@layouts": path.resolve(__dirname, "src/layouts/"),
        "@hooks": path.resolve(__dirname, "src/hooks/"),
        "@reducers": path.resolve(__dirname, "src/reducers/"),
        "@assets": path.resolve(__dirname, "src/assets/"),
        "@utils": path.resolve(__dirname, "src/utils/"),
        "@pages": path.resolve(__dirname, "src/pages/"),
      },
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
    },
    devServer: {
      port: devServerPort,
      open: {
        app: {
          name:
            process.platform === "win32"
              ? "chrome"
              : process.platform === "darwin"
                ? "Google Chrome"
                : "google-chrome",
        },
      },
      client: { logging: "warn" },
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html", // Your HTML template location
        filename: "index.html",
        inject: "body",
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    devtool: "cheap-module-source-map",
  };
};
