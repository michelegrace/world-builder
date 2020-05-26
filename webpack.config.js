const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const isDevelopment = process.env.NODE_ENV === "development"

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
    }),
  ],
}
