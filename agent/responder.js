const fs = require("fs");

function logThreat(threat) {
  const logs = JSON.parse(
    fs.readFileSync("./logs/threats.json", "utf8") || "[]",
  );

  const entry = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    threat_level: threat.threat_level,
    threat_type: threat.threat_type,
    recommendation: threat.recommendation,
  };

  logs.push(entry);
  fs.writeFileSync("./logs/threats.json", JSON.stringify(logs, null, 2));

  console.log(`\n🚨 THREAT DETECTED: ${entry.threat_level}`);
  console.log(`Type: ${entry.threat_type}`);
  console.log(`Recommendation: ${entry.recommendation}`);
  console.log(`Logged at: ${entry.timestamp}\n`);
}

module.exports = { logThreat };
