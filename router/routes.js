// handles urls beginning with /api.
const express = require('express');
const routes = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile').development;
const db = knex(knexConfig);

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
// Requires name and multiverse id
routes.post('/cards', async (req, res) => {
    if (!req.body.name || !req.body.multiverseid) { 
        return res.status(400).json({ message:"Please include a name and multiverse id to add to collection" })}
    try {
        const [id] = await db('cards').insert(req.body);
        const card = await db('cards')
            .where({ id })
            .first();
        res.status(201).json(card);
    } catch (error) {
        const message = errors[error.errno] || "We ran into an error";
        res.status(500).json({ message });
    }
});


module.exports = routes;

