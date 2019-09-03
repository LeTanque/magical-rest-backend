import express from "express";
import db from "../connection.js";


const users = express.Router();




users.get("/", async (req, res) => {
    if (res.decodedToken.user_type === "admin") {
        await db("users")
            .then(allUsers => {
                res.status(200).json(allUsers);
            })
            .catch(error => {
                res.status(500).json({ message: "Could not retrieve users.", error });
            });
    } else {
        await db("users")
            .where({ id: res.decodedToken.id})
            .then(loggedInUser => {
                res.status(200).json(loggedInUser);
            })
            .catch(error => {
                res.status(500).json({ message: "Could not retrieve user.", error });
            })
    }
});





export default users;

