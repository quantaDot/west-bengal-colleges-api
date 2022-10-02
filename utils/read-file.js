const fs = require("fs");
const path = require("path");

const readFile = (filename) => {
  const data = fs.readFileSync(
    path.join(__dirname, "../", "data", `${filename}.json`)
  );
  return JSON.parse(data);
};

module.exports = readFile;
