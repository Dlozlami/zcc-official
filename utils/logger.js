const fs   = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "../logs");
const logFile = path.join(logsDir, "app.log");

if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });
if (!fs.existsSync(logFile)) fs.writeFileSync(logFile, "");

function timestamp() {
  return new Date().toISOString();
}

function write(level, message) {
  const line = `[${timestamp()}] [${level}] ${message}\n`;
  process.stdout.write(line);
  fs.appendFileSync(logFile, line);
}

const logger = {
  info:  (msg) => write("INFO",  msg),
  warn:  (msg) => write("WARN",  msg),
  error: (msg) => write("ERROR", msg),
};

module.exports = logger;