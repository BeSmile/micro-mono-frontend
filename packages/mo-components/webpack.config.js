/*
 * @Description: webpack配置文件
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-12-28 15:47:06
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-12-29 15:31:33
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "example/index.html"),
  filename: "./index.html",
});
module.exports = {
  entry: path.join(__dirname, "example/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          // {
          //   loader: 'babel-loader',
          //   options: { plugins: ['react-hot-loader/babel'] },
          // },// 开启热加载
          {
            loader: 'ts-loader',
            options: {
              // transpileOnly: true  // ? 关闭类型检查，即只进行转译
            }
          }
        ]
      }
    ],
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 3001,
  },
};
