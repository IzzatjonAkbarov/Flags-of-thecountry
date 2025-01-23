const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve("src", "main.js"),
    admin: path.resolve("src", "admin.js"),
  },
  output: {
    path: path.resolve("dist"),
    filename: "[name].js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
