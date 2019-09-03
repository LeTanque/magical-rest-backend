const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(token) {
        jwt.verify(token, secret, (error, decodedToken) => {
            if (error) {
                res.status(401).json({ error: "Token refused" });
            } else {
                console.log("Access granted", decodedToken);
                res.decodedToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ error: "Access denied" });
    }
};



