import express from "express";
import db from "../connection.js";
// import { errorObject,errorBackup } from "../middleware/errorHandling.js";

const deckRoutes = express.Router();





// Get all stored cards
deckRoutes.get('/', async (req, res) => {
    try {
        const allDecks = await db('decks');
        if(allDecks.length === 0) {
            return res.status(200).json({ message:"No decks found!" });
        }
        res.status(200).json(allDecks);
    } 
    catch (error) {
        res.status(500).json({ message: "Decks could not be retrieved.", error:error });
    }
});



// // POST deck to database
// // Requires id
// deckRoutes.post('/', async (req, res) => {
//     if (!req.body.id) { return res.status(400).json({ message:"Please include an id" })}
//     try {
//         const lookForExistingDeck = await db('decks')
//         .where({ id:req.body.id })
//         .first();
//         if(lookForExistingDeck) {
//             return res.status(400).json({ message:"Deck with ID already exists" })
//         }

//         const deck = await db('decks')
//         .returning(['name', 'id'])
//         .insert(req.body);
//         return res.status(200).json({ message:"Deck inserted!", deck:deck });    
//     } catch (error) {
//         const message = errorObject[error.errno] || errorBackup;
//         res.status(500).json({ message, error });
//     }
// });



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


export default deckRoutes;
