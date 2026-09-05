import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

// Neutralize Next.js legacy Baseline polyfills at config evaluation time.
// This guarantees Turbopack never bundles ~14 KiB of redundant polyfills
// regardless of whether the build is run via `next build`, `npm run build`, Vercel, or Docker.
try {
  const polyfillDir = path.join(process.cwd(), "node_modules", "next", "dist", "build", "polyfills");
  if (fs.existsSync(polyfillDir)) {
    const targetFiles = ["polyfill-module.js", "polyfill-nomodule.js"];
    for (const file of targetFiles) {
      const fullPath = path.join(polyfillDir, file);
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, "utf8");
        if (!content.startsWith("/* baseline modern browsers */")) {
          fs.writeFileSync(fullPath, "/* baseline modern browsers */\n", "utf8");
        }
      }
    }
  }
} catch {
  // Gracefully handle environments with read-only node_modules
}

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
