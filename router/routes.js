// handles urls beginning with /api.
const express = require('express');
const routes = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile').development;
const db = knex(knexConfig);

routes.use(express.json());


// Get all stored cards
routes.get('/cards', async (req, res) => {
    try {
        const allCards = await db('cards');
        res.status(200).json(allCards);
        // return db('cards');
        // const allUsers = await UserDB.get(req.query);
        // res.status(200).json(allUsers);
    } 
    catch (error) {
        res.status(500).json({ error: "Cards could not be retrieved." });
    }
});


module.exports = routes;

