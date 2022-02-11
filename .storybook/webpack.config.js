const { withUnimodules } = require("@expo/webpack-config/addons");
const { resolve } = require("node:path");

module.exports = function ({ config }) {

  config.resolve.alias["lottie-react-native"] = 'react-native-web-lottie'

  return withUnimodules(config, {
    projectRoot: resolve(__dirname, "../"),
  });
}