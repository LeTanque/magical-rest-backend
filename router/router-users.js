const express = require("express");
const db = require("../connection.js");

const users = express.Router();


users.get("/", async (req, res) => {
    if (res.decodedToken.user_type === "admin") {
        await db("users")
            .then(allUsers => {
                res.status(200).json({
                    users: allUsers,
                    id: res.decodedToken.id,
                    username: res.decodedToken.username,
                    user_type: res.decodedToken.user_type
                });
            })
            .catch(error => {
                res.status(500).json({ message: "Could not retrieve users.", error });
            });
    } else {
        await db("users")
            .where({ id: res.decodedToken.id })
            .then(loggedInUser => {
                res.status(200).json({
                    user: loggedInUser,
                    id: res.decodedToken.id,
                    username: res.decodedToken.username,
                    user_type: res.decodedToken.user_type
                });
            })
            .catch(error => {
                res.status(500).json({ message: "Could not retrieve user.", error });
            })
    }
});

module.exports = users;
