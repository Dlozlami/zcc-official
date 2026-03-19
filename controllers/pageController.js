const path = require("path");

// All routes currently point to good-friday.html
// Swap out the filename when dedicated pages are ready.
const VIEWS_DIR = path.join(__dirname, "../views");

exports.home = (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, "flyer", "good-friday.html"));
};

exports.about = (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, "flyer", "good-friday.html"));
};

exports.contact = (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, "flyer", "good-friday.html"));
};

exports.events = (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, "flyer", "good-friday.html"));
};
