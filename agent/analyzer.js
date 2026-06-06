const axios = require("axios");

async function analyzeThreat(scanResult) {
  const response = await axios.post(
    "https://models.github.ai/inference/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a cybersecurity expert. Analyze network scan results and respond ONLY in this JSON format:
          {"threat_level": "LOW/MEDIUM/HIGH", "threat_type": "what kind of threat", "recommendation": "what to do"}`,
        },
        {
          role: "user",
          content: `Analyze this scan: ${scanResult}`,
        },
      ],
    },
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );

  const raw = response.data.choices[0].message.content;
  return JSON.parse(raw.replace(/```json|```/g, "").trim());
}

module.exports = { analyzeThreat };
