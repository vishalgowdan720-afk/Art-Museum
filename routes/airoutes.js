/* ============================================================
   routes/aiRoutes.js
   ============================================================ */
const express = require("express");
const router = express.Router();
const { askAI } = require("../controllers/aiController");

// POST /ask-ai
router.post("/ask-ai", askAI);

module.exports = router;