const path = require("path");
const fs = require("fs");

const writeToJSONFile = (filename, data) => {
  fs.writeFileSync(
    path.resolve(__dirname, "../models", `${filename}.json`),
    JSON.stringify(data)
  );
};

module.exports = {
  writeToJSONFile,
};
