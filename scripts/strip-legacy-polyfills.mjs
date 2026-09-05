import fs from "node:fs";
import path from "node:path";

/**
 * Strips legacy Baseline JavaScript polyfills from Next.js build.
 * 
 * Next.js automatically bundles ~14 KiB of core-js polyfills for Baseline features
 * (Array.prototype.at, flat, flatMap, Object.fromEntries, Object.hasOwn, String.prototype.trimStart/End)
 * into modern client bundles.
 * 
 * For modern browsers (Chrome 111+, Safari 16.4+, Firefox 111+, Edge 111+), all of these features
 * are natively supported. Lighthouse flags them as wasted bytes (13.7 KiB).
 * 
 * This script:
 * 1. Pre-build: Neutralizes Next.js internal polyfill source files so Turbopack doesn't bundle them.
 * 2. Post-build: Cleans any residual polyfill references in HTML, manifests, and chunk files.
 */

export function neutralizePolyfillSources() {
  const polyfillDir = path.join(process.cwd(), "node_modules", "next", "dist", "build", "polyfills");
  if (!fs.existsSync(polyfillDir)) return;

  const targetFiles = ["polyfill-module.js", "polyfill-nomodule.js"];
  for (const file of targetFiles) {
    const fullPath = path.join(polyfillDir, file);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, "utf8");
      if (!content.startsWith("/* baseline modern browsers */")) {
        fs.writeFileSync(fullPath, "/* baseline modern browsers */\n", "utf8");
        console.log(`✓ Neutralized ${file}`);
      }
    }
  }
}

export function cleanBuildOutput(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      cleanBuildOutput(fullPath);
    } else if (entry.name.endsWith(".html")) {
      let content = fs.readFileSync(fullPath, "utf8");
      // Remove any <script ... noModule="" ...></script> tags
      const cleaned = content.replace(/<script\b[^>]*\bnoModule\b[^>]*><\/script>/gi, "");
      if (cleaned !== content) {
        fs.writeFileSync(fullPath, cleaned, "utf8");
      }
    } else if (entry.name === "build-manifest.json") {
      try {
        const json = JSON.parse(fs.readFileSync(fullPath, "utf8"));
        if (Array.isArray(json.polyfillFiles) && json.polyfillFiles.length > 0) {
          for (const polyfillFile of json.polyfillFiles) {
            const chunkPath = path.join(process.cwd(), ".next", polyfillFile);
            if (fs.existsSync(chunkPath)) {
              fs.writeFileSync(chunkPath, "/* baseline modern browsers */", "utf8");
            }
          }
          json.polyfillFiles = [];
          fs.writeFileSync(fullPath, JSON.stringify(json, null, 2), "utf8");
        }
      } catch (err) {
        console.warn("Could not process manifest:", fullPath, err);
      }
    } else if (entry.name.endsWith(".js")) {
      if (entry.name.includes("polyfill")) {
        fs.writeFileSync(fullPath, "/* baseline modern browsers */", "utf8");
      } else {
        // Fallback: strip Baseline polyfills if any chunk inadvertently bundled them
        try {
          const jsContent = fs.readFileSync(fullPath, "utf8");
          if (jsContent.includes("Array.prototype.at") || jsContent.includes("String.prototype.trimStart")) {
            const cleanedJs = jsContent
              .replace(/"trimStart"in String\.prototype\|\|\([^)]+\),?/g, "")
              .replace(/"trimEnd"in String\.prototype\|\|\([^)]+\),?/g, "")
              .replace(/"description"in Symbol\.prototype\|\|Object\.defineProperty\([^)]+\),?/g, "")
              .replace(/Array\.prototype\.flat\|\|\([^)]+\),?/g, "")
              .replace(/Array\.prototype\.flatMap=function\([^)]+\)\{[^}]+\},?/g, "")
              .replace(/Promise\.prototype\.finally\|\|\([^)]+\),?/g, "")
              .replace(/Object\.fromEntries\|\|\([^)]+\),?/g, "")
              .replace(/Array\.prototype\.at\|\|\([^)]+\),?/g, "")
              .replace(/Object\.hasOwn\|\|\([^)]+\),?/g, "");
            if (cleanedJs !== jsContent) {
              fs.writeFileSync(fullPath, cleanedJs, "utf8");
              console.log(`✓ Stripped Baseline polyfills from chunk: ${entry.name}`);
            }
          }
        } catch {
          // Ignore read/write issues on auxiliary assets
        }
      }
    }
  }
}

// Check arguments or run default full routine
const arg = process.argv[2];
if (arg === "--pre") {
  neutralizePolyfillSources();
} else if (arg === "--post") {
  cleanBuildOutput(path.join(process.cwd(), ".next"));
} else {
  neutralizePolyfillSources();
  cleanBuildOutput(path.join(process.cwd(), ".next"));
}

console.log("✓ Modern browser Baseline polyfill stripping complete.");
