import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(__dirname, "client");
const clientModules = path.join(clientDir, "node_modules");

if (!fs.existsSync(clientModules)) {
  console.log("📦 Installing client dependencies...");
  execSync("npm install", { cwd: clientDir, stdio: "inherit" });
} else {
  console.log("📦 Client dependencies already installed.");
}

console.log("⚡ Building client with Vite...");
execSync("npm run build", { cwd: clientDir, stdio: "inherit" });

const srcDir = path.join(clientDir, "dist");
const destDir = path.join(__dirname, "dist");

console.log("🚀 Copying client/dist to root dist...");
if (fs.existsSync(srcDir)) {
  fs.cpSync(srcDir, destDir, { recursive: true });
}
console.log("✅ Build complete! Output ready in both dist/ and client/dist.");
