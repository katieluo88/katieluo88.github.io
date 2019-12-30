const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  context: path.join(__dirname, "./"),
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "current"
                  }
                }
              ],
              "@babel/preset-react"
            ],
            plugins: [
              [
                "babel-plugin-import",
                {
                  libraryName: "@material-ui/icons",
                  libraryDirectory: "esm", // or '' if your bundler does not support ES modules
                  camel2DashComponentName: false
                }
              ]
            ]
          }
        }
      },
      // Tell Webpack how to transform files other than JS files - in this case we tell it what to do with .css files.
      {
        test: /.css$/,
        loader: "style-loader!css-loader",
        include: path.join(__dirname, "src")
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "file-loader"
      },
      {
        test: /.md$/,
        loader: "raw-loader"
      }
    ]
  }
};
