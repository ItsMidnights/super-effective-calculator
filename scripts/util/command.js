const { exec, execSync } = require("node:child_process");
const { handleErrors } = require("./handle-errors");

const command = (command) => {
  exec(command, (err, stdout, stderr) => {
    handleErrors(err, stderr);
  });
}

const commandSync = (command) => {
  execSync(command);
}

module.exports = {
  command,
  commandSync
}; 