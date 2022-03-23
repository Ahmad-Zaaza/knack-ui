const path = require("path");
const fs = require("fs");

const loadConfig = () => {
  const filePath = path.resolve(process.cwd(), "knack-ui.json");
//   const configExists = fs.existsSync(filePath);
  try {
    const configFileContents = fs.readFileSync(filePath, { encoding: "utf-8" });
    return configFileContents;
  } catch (error) {
    console.warn("knack-ui.json not found, Using default configurations");
  }
};

loadConfig();
exports.loadConfig = loadConfig;
