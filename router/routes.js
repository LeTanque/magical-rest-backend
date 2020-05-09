const express = require("express");
const cards = require("./router-cards.js");
const auth = require("./router-auth.js");
const users = require("./router-users.js");
const decks = require("./router-decks.js");
const authenticate = require("../middleware/authentication.js");

const router = express.Router(); // Mini app


// Endpoints
router.use("/v1/auth", auth); // Handles register and login
router.use("/v1/users", authenticate, users); // Handles register and login
router.use('/v1/cards', authenticate, cards);  // Handles card requests
router.use('/v1/decks', authenticate, decks);  // Handles deck requests

module.exports = router;
