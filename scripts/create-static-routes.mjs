import { copyFileSync, mkdirSync } from "node:fs";

mkdirSync("dist/privacy", { recursive: true });
copyFileSync("dist/index.html", "dist/privacy/index.html");
copyFileSync("dist/index.html", "dist/404.html");
