/* ============================================================
   controllers/aiController.js
   Handles the /ask-ai route logic — talks to Google Gemini
   ============================================================ */

// Gemini endpoint — using gemini-2.5-flash (current stable model)
function getGeminiEndpoint() {
  const key = process.env.GEMINI_API_KEY;
  return `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;
}

// System prompt — defines the AI's personality/expertise
const SYSTEM_PROMPT = `You are an expert historian and curator specializing in Indian indigenous
and traditional art forms, particularly:
- Warli Art (Maharashtra) — tribal geometric paintings
- Madhubani Art (Bihar) — Mithila paintings with mythology and nature motifs
- Kasuti Embroidery (Karnataka) — knotless needlework with temple motifs

Respond as a museum curator would: educational, warm, culturally respectful, and concise
(120-220 words). Mention materials, technique, or cultural context where relevant.
If asked about something unrelated to Indian art and culture, politely redirect the
conversation back to these art forms.`;

async function askAI(req, res) {
  const { question } = req.body;

  if (!question || question.trim() === "") {
    return res.status(400).json({ error: "Question cannot be empty." });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "your_gemini_api_key_here") {
    return res.status(500).json({
      error: "Gemini API key is not configured. Add it to backend/.env"
    });
  }

  try {
    const requestBody = {
      contents: [
        {
          parts: [
            { text: SYSTEM_PROMPT + "\n\nUser Question: " + question.trim() }
          ]
        }
      ],
      generationConfig: {
        maxOutputTokens: 1024,
        temperature: 0.7
      }
    };

    // Uses Node's built-in fetch (available natively in Node 18+)
    const geminiResponse = await fetch(getGeminiEndpoint(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });

    if (!geminiResponse.ok) {
      const errBody = await geminiResponse.text();
      console.error("Gemini API error:", geminiResponse.status, errBody);
      return res.status(geminiResponse.status).json({
        error: "Gemini API returned an error. Check your API key and model availability."
      });
    }

    const data = await geminiResponse.json();
    const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!answer) {
      return res.status(500).json({ error: "Gemini returned an empty response." });
    }

    res.json({ success: true, answer: answer.trim() });

  } catch (err) {
    console.error("Server error in askAI:", err.message);
    res.status(500).json({ error: "Internal server error: " + err.message });
  }
}

module.exports = { askAI };