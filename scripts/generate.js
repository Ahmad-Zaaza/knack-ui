/*
  eslint
  "no-console": "off",
  "vars-on-top": "off",
*/

const { spawnSync } = require("child_process");

const styles = {
  // got these from playing around with what I found from:
  // https://github.com/istanbuljs/istanbuljs/blob/0f328fd0896417ccb2085f4b7888dd8e167ba3fa/packages/istanbul-lib-report/lib/file-writer.js#L84-L96
  // they're the best I could find that works well for light or dark terminals
  success: { open: "\u001b[32;1m", close: "\u001b[0m" },
  danger: { open: "\u001b[31;1m", close: "\u001b[0m" },
  info: { open: "\u001b[36;1m", close: "\u001b[0m" },
  subtitle: { open: "\u001b[2;1m", close: "\u001b[0m" }
};
function color(modifier, string) {
  return styles[modifier].open + string + styles[modifier].close;
}

console.log(color("info", "▶️  Starting template generation..."));

const command = `npx "https://gist.github.com/Ahmad-Zaaza/6e8cf34c4ae7becccace65d488fcc85c"`;

console.log(
  color("subtitle", `      Running the following command: ${command}`)
);
const result = spawnSync(command, { stdio: "inherit", shell: true });
if (result.status === 0) {
  console.log(color("success", "✅  Template generated successfully..."));
} else {
  process.exit(result.status);
}

