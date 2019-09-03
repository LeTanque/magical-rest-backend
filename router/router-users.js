import express from "express";
import db from "../connection.js";


const users = express.Router();




users.get("/", async (req, res) => {
    await db("users")
        .then(allUsers => {
            res.status(200).json(allUsers);
        })
        .catch(error => {
            res.status(500).json({ message: "could not retrieve users", error });
        });
});





export default users;

