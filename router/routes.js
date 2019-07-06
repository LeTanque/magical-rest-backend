const environment = process.env.NODE_DB_ENV || 'development';

const knexConfig = require('../knexfile.js')[environment];
const express = require('express');

const routes = express.Router();
const db = require('knex')(knexConfig);

routes.use(express.json());


const errors = { // Dynamic error messaging based on sqlite codes
    '1': 'We ran into an error.',
    '4': 'Operation aborted',
    '9': 'Operation aborted',
    '19': 'Another card with that value exists, yo!'
};


// Get all stored cards
routes.get('/cards', async (req, res) => {
    try {
        const allCards = await db('cards');
        if(allCards.length === 0) {
            return res.status(200).json({message:"No cards found"});
        }
        res.status(200).json(allCards);
    } 
    catch (error) {
        res.status(500).json({ message: "Cards could not be retrieved.", error:error });
    }
});


// POST card to database
// Requires id
routes.post('/cards', async (req, res) => {
    if (!req.body.id) { return res.status(400).json({ message:"Please include an id" })}
    try {
        const lookForExistingCard = await db('cards')
        .where({ multiverseid:req.body.multiverseid })
        .first();
        if(lookForExistingCard) {
            return res.status(400).json({ message:"Card with ID already exists" })
        }

        const card = await db('cards')
        .returning(['name', 'multiverseid'])
        .insert(req.body);
        return res.status(200).json({message:"Card inserted!", card:card});    
    } catch (error) {
        const message = errors[error.errno] || "We ran into an error";
        res.status(500).json({ message:message, error:error });
    }
});


// DESTROY card in database
// Requires multiverse id
routes.delete('/cards/:multiverseid', async (req, res) => {
    try {
        const card = await db('cards')
        .where({ multiverseid: req.params.multiverseid })
        .first();

        const count = await db('cards')
            .where({ multiverseid: req.params.multiverseid })
            .del();
        if (count > 0) {
            res.status(200).json({message:"deleted", card:card }).end();
        } else {
            res.status(404).json({ message:"Card not found" });
        }
    } catch (error) {
        const message = errors[error.errno] || "We ran into an error";
        res.status(500).json({ message });
    }
});


module.exports = routes;

