const express    = require("express");
const router     = express.Router();
const controller = require("../controllers/pageController");

router.get("/",        controller.home);
router.get("/about",   controller.about);
router.get("/contact", controller.contact);
router.get("/events",  controller.events);

module.exports = router;
