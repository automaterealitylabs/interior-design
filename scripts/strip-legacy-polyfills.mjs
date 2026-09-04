import fs from "node:fs";
import path from "node:path";

/**
 * Strips legacy nomodule polyfills from Next.js build output.
 * 
 * Next.js automatically emits an extra ~14 KiB core-js polyfill bundle
 * (with nomodule attribute) containing polyfills for Baseline JavaScript
 * features (Array.prototype.at, flat, Object.fromEntries, Object.hasOwn, etc.).
 * 
 * Modern browsers ignore nomodule scripts, but Lighthouse inspects all referenced
 * scripts and flags them under "Legacy JavaScript / Polyfills" (13.7 KiB wasted bytes).
 * 
 * This script:
 * 1. Empties polyfillFiles in all build-manifest.json files so SSR doesn't inject it.
 * 2. Removes <script ... noModule> tags from all prerendered HTML files.
 * 3. Truncates polyfill chunk files to empty JS so 0 wasted bytes are served.
 */

function cleanDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      cleanDirectory(fullPath);
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
          // Truncate the polyfill chunk files themselves
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
    }
  }
}

console.log("Cleaning legacy nomodule polyfills for modern browser targets...");
cleanDirectory(path.join(process.cwd(), ".next"));
console.log("✓ Legacy polyfill chunks stripped successfully.");
