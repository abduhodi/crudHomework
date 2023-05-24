const fs = require("fs");
const path = require("path");

const readJSONFile = (filename) => {
  const jsonData = fs.readFileSync(
    path.resolve(__dirname, "../models", `${filename}.json`),
    {
      encoding: "utf-8",
    }
  );
  return JSON.parse(jsonData);
};

module.exports = {
  readJSONFile,
};
