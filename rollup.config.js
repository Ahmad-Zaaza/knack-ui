import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";

const pkg = require("./package.json");


export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: pkg.main,
        sourcemap: false,
        format: "cjs",
      },
      {
        file: pkg.module,
        sourcemap: false,
        format: "esm",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        // inject: {
        //   insertAt: "top",
        // },
        autoModules: false,
        modules: {
          generateScopedName: "Knack_[hash:base64:8]",
        },
        extract: "knack-ui.css",
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
