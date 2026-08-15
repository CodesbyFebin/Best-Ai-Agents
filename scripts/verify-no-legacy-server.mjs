import fs from "node:fs";
import path from "node:path";

const forbiddenPaths = [
  "server/app.ts",
  "server/app.js",
  "server/start.ts",
  "server/start.js",
  "api/index.ts",
  "api/index.js",
];

const forbiddenPackages = ["express", "@types/express"];

const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
const dependencies = {
  ...(packageJson.dependencies ?? {}),
  ...(packageJson.devDependencies ?? {}),
};

const failures = [];

for (const file of forbiddenPaths) {
  if (fs.existsSync(path.resolve(file))) {
    failures.push(`Legacy server exists: ${file}`);
  }
}

for (const pkg of forbiddenPackages) {
  if (dependencies[pkg]) {
    failures.push(`Legacy dependency exists in package.json: ${pkg}`);
  }
}

if (fs.existsSync("package-lock.json")) {
  const packageLock = JSON.parse(fs.readFileSync("package-lock.json", "utf8"));
  const rootPackage = packageLock.packages?.[""] ?? {};
  const rootDependencies = {
    ...(rootPackage.dependencies ?? {}),
    ...(rootPackage.devDependencies ?? {}),
  };

  for (const pkg of forbiddenPackages) {
    if (rootDependencies[pkg]) {
      failures.push(`Legacy dependency exists in package-lock root: ${pkg}`);
    }
    if (packageLock.packages?.[`node_modules/${pkg}`]) {
      failures.push(`Legacy package exists in package-lock: ${pkg}`);
    }
  }
}

if (failures.length) {
  console.error("❌ Legacy server gate failed");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("✅ No legacy Express server detected");
