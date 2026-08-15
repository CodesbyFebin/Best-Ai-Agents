import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["packages/**/*.test.ts", "src/**/*.test.ts", "tests/**/*.test.ts"],
    coverage: {
      enabled: false,
      reporter: ["text", "lcov"],
    },
  },
});
