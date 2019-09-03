import express from "express";
import cards from "./router-cards.js";
import auth from "./router-auth.js";
import users from "./router-users.js";
import authenticate from "../middleware/authentication.js";

const router = express.Router(); // Mini app



// Endpoints
router.use("/v1/auth", auth); // Handles register and login
router.use("/v1/users", authenticate, users); // Handles register and login
router.use('/v1/cards', authenticate, cards);  // Handles card requests



module.exports = router;
