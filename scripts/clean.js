const { command } = require("./util/command");

const clean = () => {
  console.log("Cleaning project...\n");
  command("./node_modules/.bin/rimraf .expo/");
  command("./node_modules/.bin/rimraf node_modules/");
  command("watchman watch-del-all");
}

clean();

module.exports = {
  clean
}