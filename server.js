require("dotenv").config();
const express = require("express");
const fs = require("fs");
const { scanNetwork } = require("./agent/scanner");
const { analyzeThreat } = require("./agent/analyzer");
const { logThreat } = require("./agent/responder");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("dashboard"));

app.get("/threats", (req, res) => {
  const data = fs.readFileSync("./logs/threats.json", "utf8");
  res.json(JSON.parse(data || "[]"));
});

// Agent loop
async function runAgent() {
  console.log("🔍 CyberSentinel scanning...");
  try {
    const scanResult = await scanNetwork("127.0.0.1");
    const analysis = await analyzeThreat(scanResult);
    logThreat(analysis);
  } catch (err) {
    console.error("Agent error:", err.message);
  }
}

// Run every 60 seconds
runAgent();
setInterval(runAgent, 60000);

app.listen(PORT, () => {
  console.log(`✅ CyberSentinel running on http://localhost:${PORT}`);
});
