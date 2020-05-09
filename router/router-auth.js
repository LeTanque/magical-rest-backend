const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../connection.js");
const hashPassword = require("../middleware/hashPassword.js");
const { errorObject,errorBackup } = require("../middleware/errorHandling.js");

const auth = express.Router();


const checkUserExistsFunc = async (req) => {
    const checkUserExistsFunc = await db("users")
        .where({ username:req.body.username })
        .first();
    if(checkUserExistsFunc) {
        return checkUserExistsFunc
    } else {
        return { message: "No user exists" }
    }
}

const generateToken = (user) => {
    const payload = {
        id: user.id,
        username: user.username,
        user_type: user.user_type
    };
    const secret = process.env.SECRET;
    const options = {
        expiresIn: "1d"
    };
    return jwt.sign(payload, secret, options);
}

auth.post("/register", hashPassword, async (req, res) => {
    const checkUserExists = await db("users")
        .where({ username:req.body.username })
        .first();
    if(checkUserExists) {
        return res.status(401).json({ message: `User ${req.body.username} already exists.` })
    } 
    
    try {
        db("users")
            .insert(req.body)
            .then(userObject => {
                return res.status(200).json({ 
                    command: userObject.command, 
                    message:`User '${req.body.username}' added.`,
                    password: req.body.password
                })
            })
            .catch(error => {
                return res.status(500).json({ error })
            })
    } catch (error) {
        const message = errorObject[error.errno] || errorBackup;
        res.status(500).json({ message, error });
    }
})

auth.post("/login", async (req, res) => {
    if (!req.body || !req.body.username || !req.body.password) {
        return res.status(400).json({ message:"Must include username and password" })
    }
    try {
        checkUserExistsFunc(req)
            .then(userObject => {
                if (userObject && bcrypt.compareSync(req.body.password, userObject.password)) {
                    const token = generateToken(userObject);
                    res.status(200).json({ 
                        message: "Here is your token:", 
                        token, 
                        user: {
                            id: userObject.id, 
                            username: userObject.username,
                            user_type: userObject.user_type
                        } 
                    })
                } else {
                    res.status(401).json({ message: "Please try again." });
                }
            })
            .catch(() => {
                res.status(401).json({ message: "User does not exist." })
            })
    } catch (error) {
        const message = errorObject[error.errno] || errorBackup;
        res.status(500).json({ message, error });        
    }
})

module.exports = auth;
