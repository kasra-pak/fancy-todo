const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const devServerPort = 5000;

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: "./src/index.js",
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: [".*", ".js", ".jsx"],
      alias: {
        "@components": path.resolve(__dirname, 'src/components/'),
        "@layouts": path.resolve(__dirname, 'src/layouts/'),
        "@hooks": path.resolve(__dirname, 'src/hooks/'),
        "@reducers": path.resolve(__dirname, 'src/reducers/'),
        "@assets": path.resolve(__dirname, 'src/assets/'),
        "@utils": path.resolve(__dirname, 'src/utils/'),
      }
    },
    output: {
      path: path.resolve(__dirname, "build"),
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
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html', // Your HTML template location
        filename: 'index.html',
        inject: 'body',
      }),
      new webpack.DefinePlugin(envKeys)
    ],
  };
};
