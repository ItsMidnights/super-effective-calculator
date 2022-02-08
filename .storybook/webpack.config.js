const { withUnimodules } = require("@expo/webpack-config/addons");
const { resolve } = require("node:path");

module.exports = function ({ config }) {
  return withUnimodules(config, {
    projectRoot: resolve(__dirname, "../"),
  });
}