// Project 2 — sample Node app for Coolify.
// Deploy this via Coolify as "Private/Public Git repo" or "Dockerfile" type.
// No coding needed: just push this folder to GitHub, then point Coolify at it.
const express = require("express");
const os = require("os");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Deployed via Coolify 🚀</title>
<style>body{font-family:system-ui,sans-serif;background:#0f172a;color:#fff;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}
.card{background:#fff;color:#0f172a;padding:32px;border-radius:16px;max-width:560px}.badge{background:#dcfce7;color:#166534;padding:4px 10px;border-radius:999px;font-size:12px}</style>
</head><body><div class="card">
<p class="badge">COOLIFY · BUILD ${process.env.COOLIFY_BUILD || "local"} · ${new Date().toISOString()}</p>
<h1>🚀 Deployed without Vercel!</h1>
<p>This page is served by <b>your VPS</b> via <b>Coolify + Docker</b>.</p>
<ul><li>Hostname: <code>${os.hostname()}</code></li>
<li>Node: <code>${process.version}</code></li>
<li>Env: <code>${process.env.NODE_ENV || "production"}</code></li></ul>
<p><a href="/api/health">Health check: /api/health</a> · <a href="/api/info">/api/info</a></p>
</div></body></html>`);
});

app.get("/api/health", (req, res) => res.json({ ok: true, uptime: process.uptime() }));
app.get("/api/info", (req, res) =>
  res.json({ hostname: os.hostname(), node: process.version, memory: process.memoryUsage(), env: process.env.APP_ENV || "coolify-lab" })
);

app.listen(PORT, "0.0.0.0", () => console.log(`sample-app listening on ${PORT}`));
