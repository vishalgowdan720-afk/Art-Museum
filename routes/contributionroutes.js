/* ============================================================
   routes/contributionRoutes.js
   ============================================================ */
const express = require("express");
const router = express.Router();
const { submitArt, getSubmissions } = require("../controllers/contributionController");

// POST /submit-art
router.post("/submit-art", submitArt);

// GET /submissions  (view stored submissions — useful for testing)
router.get("/submissions", getSubmissions);

module.exports = router;