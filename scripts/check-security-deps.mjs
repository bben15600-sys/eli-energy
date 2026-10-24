/**
 * Fail when next or sharp can resolve below the patched floors.
 *
 * next 16.4.1 — GHSA-2464-fhr4-w9xw / CVE-2026-96889 and GHSA-673q-mjm6-r5xr
 * sharp 0.35.5 — GHSA-wq5f-xc86-pv6w / CVE-2026-96889
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const FLOORS = {
  next: "16.4.1",
  sharp: "0.35.5",
};

function parseVersion(version) {
  const match = /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?$/.exec(version);
  if (!match) {
    throw new Error(`Unrecognized version: ${version}`);
  }
  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
    pre: match[4] ? match[4].split(".") : null,
  };
}

function compareVersions(left, right) {
  const a = parseVersion(left);
  const b = parseVersion(right);
  for (const key of ["major", "minor", "patch"]) {
    if (a[key] !== b[key]) return a[key] - b[key];
  }
  if (a.pre === null && b.pre === null) return 0;
  if (a.pre === null) return 1;
  if (b.pre === null) return -1;
  const length = Math.max(a.pre.length, b.pre.length);
  for (let i = 0; i < length; i += 1) {
    const ai = a.pre[i];
    const bi = b.pre[i];
    if (ai === undefined) return -1;
    if (bi === undefined) return 1;
    const aNum = /^\d+$/.test(ai);
    const bNum = /^\d+$/.test(bi);
    if (aNum && bNum) {
      const diff = Number(ai) - Number(bi);
      if (diff !== 0) return diff;
    } else if (aNum) return -1;
    else if (bNum) return 1;
    else if (ai !== bi) return ai < bi ? -1 : 1;
  }
  return 0;
}

function lowerBound(specifier) {
  const alternatives = specifier.split("||").map((part) => part.trim());
  const bounds = [];
  for (const alternative of alternatives) {
    const token = alternative.split(/\s+/).find((part) =>
      /^(?:\^|~|>=)?\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(part),
    );
    if (!token) return null;
    bounds.push(token.replace(/^[\^~>=]+/, ""));
  }
  return bounds.sort(compareVersions)[0];
}

function assertAtLeast(name, version, location, failures) {
  if (compareVersions(version, FLOORS[name]) < 0) {
    failures.push(
      `${location}: ${name}@${version} is below the patched floor ${FLOORS[name]}`,
    );
  }
}

function checkDeclared(pkg, failures) {
  for (const name of Object.keys(FLOORS)) {
    const declared =
      pkg.dependencies?.[name] ?? pkg.devDependencies?.[name] ?? pkg.overrides?.[name];
    if (!declared) {
      if (name === "next") {
        failures.push(`package.json does not depend on ${name}`);
      }
      continue;
    }
    if (declared.startsWith("$")) continue;
    const bound = lowerBound(declared);
    if (!bound) {
      failures.push(
        `package.json ${name} specifier "${declared}" does not guarantee ${FLOORS[name]}`,
      );
      continue;
    }
    assertAtLeast(name, bound, `package.json ${name}`, failures);
  }
  if (!pkg.dependencies?.sharp && !pkg.devDependencies?.sharp) {
    failures.push("package.json does not depend on sharp");
  }
}

function checkLockfile(failures) {
  const lockPath = path.join(ROOT, "package-lock.json");
  const lock = JSON.parse(readFileSync(lockPath, "utf8"));
  const packages = lock.packages ?? {};
  const seen = { next: 0, sharp: 0 };
  for (const [key, entry] of Object.entries(packages)) {
    const name = key.split("node_modules/").at(-1);
    if (!FLOORS[name] || !entry.version) continue;
    seen[name] += 1;
    assertAtLeast(name, entry.version, `package-lock.json ${key}`, failures);
  }
  for (const name of Object.keys(FLOORS)) {
    if (seen[name] === 0) {
      failures.push(`package-lock.json does not pin ${name}`);
    }
  }
}

function readInstalled(dir, name, found, failures) {
  const pkgPath = path.join(dir, "package.json");
  if (!existsSync(pkgPath)) {
    failures.push(`${path.relative(ROOT, dir)} is missing package.json`);
    return;
  }
  const installed = JSON.parse(readFileSync(pkgPath, "utf8"));
  found[name] += 1;
  assertAtLeast(
    name,
    installed.version,
    path.relative(ROOT, pkgPath),
    failures,
  );
}

function walkNodeModules(dir, found, failures) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name === ".bin") continue;
    const child = path.join(dir, entry.name);
    if (entry.name === "node_modules") {
      walkNodeModules(child, found, failures);
      continue;
    }
    if (path.basename(dir) !== "node_modules") continue;
    if (entry.name === "next" || entry.name === "sharp") {
      readInstalled(child, entry.name, found, failures);
    }
    const nested = path.join(child, "node_modules");
    if (existsSync(nested)) walkNodeModules(nested, found, failures);
  }
}

function checkInstalled(failures) {
  const modules = path.join(ROOT, "node_modules");
  if (!existsSync(modules)) return;
  const found = { next: 0, sharp: 0 };
  walkNodeModules(modules, found, failures);
  for (const name of Object.keys(FLOORS)) {
    if (found[name] === 0) {
      failures.push(`node_modules does not contain ${name}`);
    }
  }
}

function selfTest() {
  const cases = [
    ["16.4.1", "16.4.1", 0],
    ["16.4.0", "16.4.1", -1],
    ["16.4.2", "16.4.1", 1],
    ["16.4.1-canary.1", "16.4.1", -1],
    ["0.35.5-rc.1", "0.35.5", -1],
    ["0.35.10", "0.35.5", 1],
  ];
  for (const [left, right, direction] of cases) {
    const actual = Math.sign(compareVersions(left, right));
    if (actual !== direction) {
      throw new Error(`compare(${left}, ${right}) = ${actual}, expected ${direction}`);
    }
  }
  if (lowerBound("^16.4.1") !== "16.4.1") {
    throw new Error("lowerBound caret");
  }
  if (lowerBound(">=0.35.5 <0.36.0") !== "0.35.5") {
    throw new Error("lowerBound range");
  }
  if (lowerBound("16.2.4 || 16.4.1") !== "16.2.4") {
    throw new Error("lowerBound or");
  }
}

function main() {
  selfTest();
  if (process.argv.includes("--self-test")) {
    console.log("security dependency floor self-test passed");
    return;
  }
  const pkg = JSON.parse(readFileSync(path.join(ROOT, "package.json"), "utf8"));
  const failures = [];
  checkDeclared(pkg, failures);
  checkLockfile(failures);
  checkInstalled(failures);
  if (failures.length > 0) {
    console.error("Patched dependency floor check failed:");
    for (const failure of failures) console.error(`- ${failure}`);
    process.exit(1);
  }
  console.log(
    `Patched dependency floor ok: next >= ${FLOORS.next}, sharp >= ${FLOORS.sharp}`,
  );
}

main();
