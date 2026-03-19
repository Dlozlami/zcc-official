require('dotenv').config()
const express        = require("express");
const path           = require("path");
const logger         = require("./utils/logger");
const requestLogger  = require("./middleware/requestLogger");
const errorHandler   = require("./middleware/errorHandler");
const pageRoutes     = require("./routes/pageRoutes");

const app  = express();
const PORT = process.env.PORT;

// ── Static assets ──────────────────────────────
app.use(express.static(path.join(__dirname, "public")));

// ── Middleware ─────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// ── Routes ─────────────────────────────────────
app.use("/", pageRoutes);

// ── 404 handler ────────────────────────────────
app.use((req, res) => {
  logger.warn(`404 – ${req.method} ${req.url}`);
  res.status(404).send("<h1>404 – Page Not Found</h1>");
});

// ── Error handler (must be last) ───────────────
app.use(errorHandler);

// ── Start ──────────────────────────────────────
app.listen(PORT, () => {
  logger.info(`ZCC server running → http://localhost:${PORT}`);
});
