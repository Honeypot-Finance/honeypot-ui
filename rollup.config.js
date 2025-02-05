import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import dts from "rollup-plugin-dts";

export default [
  // JavaScript & TypeScript Build
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "esm",
        sourcemap: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@nextui-org/react": "NextUI",
        },
      },
      {
        file: "dist/index.cjs",
        format: "cjs",
        sourcemap: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@nextui-org/react": "NextUI",
        },
        exports: "named",
      },
    ],
    external: ["react", "react-dom", "@nextui-org/react"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "./dist",
      }),
      babel({
        babelHelpers: "bundled",
        extensions: [".ts", ".tsx"],
        presets: ["@babel/preset-react", "@babel/preset-typescript"],
      }),
    ],
  },
  // Generate TypeScript Definitions
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
