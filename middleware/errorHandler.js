const logger = require("../utils/logger");

function errorHandler(err, req, res, next) {
  logger.error(`${err.message} — ${req.method} ${req.url}`);
  res.status(500).send("<h1>500 – Internal Server Error</h1>");
}

module.exports = errorHandler;
