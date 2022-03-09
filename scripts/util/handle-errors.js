const handleErrors = (err, stderr) => {
  if (err) {
    console.log(`error: ${err.message}`);
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
  }
  return false;
};

module.exports = {
  handleErrors,
};
