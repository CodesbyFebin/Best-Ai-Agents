import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    ".next/types/**",
    ".next/dev/types/**",
    "eslint.config.mjs",
    "postcss.config.mjs",
    "vitest.config.ts",
    "next.config.ts",
    "package.json",
    "tsconfig.json",
  ]),
]);

export default eslintConfig;
