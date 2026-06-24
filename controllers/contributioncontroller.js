/* ============================================================
   controllers/contributionController.js
   Handles /submit-art — stores submissions in a local JSON file
   ============================================================ */

const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "submissions.json");

function readSubmissions() {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw || "[]");
  } catch (err) {
    return [];
  }
}

function writeSubmissions(list) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2));
}

function submitArt(req, res) {
  const { title, artist, artForm, region, description } = req.body;

  if (!title || !artist || !artForm || !description) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const submissions = readSubmissions();

  const newEntry = {
    id: Date.now(),
    title: title.trim(),
    artist: artist.trim(),
    artForm,
    region: (region || "").trim(),
    description: description.trim(),
    status: "pending_review",
    submittedAt: new Date().toISOString()
  };

  submissions.push(newEntry);
  writeSubmissions(submissions);

  res.json({ success: true, message: "Submission received for review.", entry: newEntry });
}

function getSubmissions(req, res) {
  res.json(readSubmissions());
}

module.exports = { submitArt, getSubmissions };