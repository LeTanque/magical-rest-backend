const express = require("express");
const db = require("../connection.js");
const { errorObject,errorBackup } = require("../middleware/errorHandling.js");

const deckRoutes = express.Router();


// GET DECKS
deckRoutes.get("/", async (req, res) => {
    // console.log("decodedToken in router-decks ---> ", res.decodedToken)
    try {
        const allDecksByUser = await db("decks")
            .where({
                user_id: res.decodedToken.id 
            });
        // console.log("all decks in router-decks ---> ", allDecksByUser)
        // if(allDecksByUser.length === 0) {
        //     return res.status(404).json({ message: "No decks found!" });
        // }
        res.status(200).json(allDecksByUser);
    } 
    catch (error) {
        res.status(500).json({ message: "Decks could not be retrieved.", error:error });
    }
});

// POST DECKS
deckRoutes.post("/", async (req, res) => {
    if (!req.body.name) { return res.status(400).json({ message: "Please include a name for the deck." })}

    const existingDeck = await db("decks")
        .where({ 
            name: req.body.name,
            user_id: res.decodedToken.id 
        })
    if(existingDeck.length > 0) {
        return res.status(400).json({ message: "Deck with ID already exists" })
    }

    try {
        const deckObject = {
            name: req.body.name,
            description: req.body.description ? req.body.description : "",
            image_url: req.body.imageUrl ? req.body.imageUrl : "",
            user_id: res.decodedToken.id
        }
        const deck = await db("decks")
            .returning(["id", "user_id", "name", "description", "image_url" ])
            .insert(deckObject);
        
        return res.status(200).json({ message: "Deck inserted!", deck });    
    } catch (error) {
        const message = errorObject[error.errno] || errorBackup;
        res.status(500).json({ message, error });
    }
});

// // DESTROY deck in database. Requires Deck ID
// deckRoutes.delete('/:id', async (req, res) => {
//     try {
//         const card = await db('decks')
//         .where({ id: req.params.id })
//         .first();

//         const count = await db('decks')
//             .where({ id: req.params.id })
//             .del();
//         if (count > 0) {
//             res.status(200).json({message:"deleted", card:card }).end();
//         } else {
//             res.status(404).json({ message:"Card not found" });
//         }
//     } catch (error) {
//         const message = errorObject[error.errno] || errorBackup;
//         res.status(500).json({ message, error });
//     }
// });

module.exports = deckRoutes;
