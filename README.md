# 🛡️ CyberSentinel

### Autonomous Network Threat Detection Agent

> An AI-powered autonomous cybersecurity agent that continuously monitors your network, analyzes threats using artificial intelligence, and displays real-time results on a live dashboard — all without human intervention.

---

## 📸 Dashboard Preview

![CyberSentinel Dashboard](https://raw.githubusercontent.com/DevwithMujeeb/cybersentinel/main/dashboard/preview.png)

---

## 🚀 Features

- 🔍 **Autonomous Network Scanning** — continuously scans common ports every 60 seconds
- 🤖 **AI-Powered Threat Analysis** — uses GPT-4o-mini via GitHub Models to reason about threats
- 📊 **Live Dashboard** — real-time threat visualization with color-coded severity levels
- 📋 **Threat Logging** — every threat is timestamped and stored in JSON
- ⚡ **Zero Human Intervention** — fully autonomous agent loop
- 🟢 **Threat Classification** — LOW / MEDIUM / HIGH severity detection

---

## 🧠 How It Works

```bash
┌─────────────────────────────────────────────────────┐
│                  CYBERSENTINEL LOOP                  │
│                                                     │
│   Scan Ports → Feed to AI → Analyze Threat          │
│        ↑                         ↓                  │
│   Wait 60s  ←  Log & Display ← Classify             │
└─────────────────────────────────────────────────────┘
```

1. **Scanner** — scans 12 common network ports on the target host
2. **Analyzer** — sends scan results to GPT-4o-mini for intelligent threat analysis
3. **Responder** — logs the threat with level, type, and recommendation
4. **Dashboard** — displays all threats live, auto-refreshes every 10 seconds

---

## 🛠️ Tech Stack

| Layer           | Technology                  |
| --------------- | --------------------------- |
| Runtime         | Node.js                     |
| Web Server      | Express.js                  |
| AI Model        | GPT-4o-mini (GitHub Models) |
| Network Scanner | Node.js net module          |
| Frontend        | HTML / CSS / JavaScript     |
| Storage         | JSON flat file              |
| Environment     | dotenv                      |

---

## 📁 Project Structure

```bash
cybersentinel/
├── agent/
│   ├── scanner.js       ← Port scanner
│   ├── analyzer.js      ← AI threat analysis
│   └── responder.js     ← Threat logger
├── dashboard/
│   └── index.html       ← Live dashboard UI
├── logs/
│   └── threats.json     ← Threat log storage
├── server.js            ← Main entry point + agent loop
├── .env                 ← API credentials (not committed)
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js v18+
- GitHub Personal Access Token (classic) with `repo` scope

### Steps

1. **Clone the repository**

```bash
   git clone https://github.com/DevwithMujeeb/cybersentinel.git
   cd cybersentinel
```

2. **Install dependencies**

```bash
   npm install
```

3. **Create environment file**

```bash
   touch .env
```

Add this inside `.env`:

```bash
GITHUB_TOKEN=your_github_personal_access_token
```

4. **Run CyberSentinel**

```bash
   node server.js
```

5. **Open the dashboard**

```bash
http://localhost:3000
```

---

## 🎯 Ports Monitored

| Port | Service         |
| ---- | --------------- |
| 21   | FTP             |
| 22   | SSH             |
| 23   | Telnet          |
| 25   | SMTP            |
| 53   | DNS             |
| 80   | HTTP            |
| 443  | HTTPS           |
| 3000 | Node.js         |
| 3306 | MySQL           |
| 5432 | PostgreSQL      |
| 8080 | HTTP Alternate  |
| 8443 | HTTPS Alternate |

---

## 🔐 Threat Levels

| Level     | Meaning                                  |
| --------- | ---------------------------------------- |
| 🟢 LOW    | Minor exposure, low risk                 |
| 🟡 MEDIUM | Potential vulnerability detected         |
| 🔴 HIGH   | Critical threat, immediate action needed |

---

## ⚠️ Disclaimer

CyberSentinel is built for **educational purposes and ethical use only**. Only scan networks and systems you own or have explicit permission to test. Unauthorized scanning is illegal.

---

## 👨‍💻 Author

**AbdulMujeeb** — Cybersecurity Enthusiast & Developer

- GitHub: [@DevwithMujeeb](https://github.com/DevwithMujeeb)

---

## 📄 License

MIT License — free to use, modify, and distribute.
