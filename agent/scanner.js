const net = require("net");

function scanPort(host, port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(1000);
    socket.on("connect", () => {
      socket.destroy();
      resolve({ port, status: "open" });
    });
    socket.on("timeout", () => {
      socket.destroy();
      resolve({ port, status: "closed" });
    });
    socket.on("error", () => {
      socket.destroy();
      resolve({ port, status: "closed" });
    });
    socket.connect(port, host);
  });
}

async function scanNetwork(target = "127.0.0.1") {
  const commonPorts = [
    21, 22, 23, 25, 53, 80, 443, 3306, 3000, 8080, 8443, 5432,
  ];
  console.log(`Scanning ${target}...`);

  const results = await Promise.all(
    commonPorts.map((p) => scanPort(target, p)),
  );
  const openPorts = results.filter((r) => r.status === "open");

  const summary = `
    Target: ${target}
    Open ports: ${openPorts.map((p) => p.port).join(", ") || "none"}
    Total scanned: ${commonPorts.length} ports
  `;

  return summary;
}

module.exports = { scanNetwork };
