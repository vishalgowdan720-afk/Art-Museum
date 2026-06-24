/* ============================================================
   HERITAGE BYTES — backend/server.js
   Main Express server. Loads routes, sets up CORS, starts on :5000
   ============================================================ */

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const aiRoutes = require("./routes/aiRoutes");
const contributionRoutes = require("./routes/contributionRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

/* ---- Middleware ---- */
app.use(cors({ origin: "*" }));
app.use(express.json());

/* ---- Health check ---- */
app.get("/", (req, res) => {
  res.json({
    status: "✅ Heritage Bytes backend is running",
    routes: ["POST /ask-ai", "POST /submit-art", "GET /submissions"]
  });
});

/* ---- Mount routes ---- */
app.use("/", aiRoutes);
app.use("/", contributionRoutes);

/* ---- 404 handler ---- */
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.path} not found.` });
});

/* ---- Start server ---- */
app.listen(PORT, () => {
  console.log("\n==============================================");
  console.log("  🎨 Heritage Bytes Backend Started");
  console.log(`  🌐 http://localhost:${PORT}`);
  console.log("  📮 POST /ask-ai");
  console.log("  📮 POST /submit-art");
  console.log("==============================================\n");

  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "your_gemini_api_key_here") {
    console.warn("⚠️  GEMINI_API_KEY not set in backend/.env — AI Guide will not work until added.\n");
  } else {
    console.log("✅ Gemini API key loaded.\n");
  }
});