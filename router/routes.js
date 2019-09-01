const express = require('express');
// import express from 'express';

const routes = express.Router();

const db = require("../connection.js");

import { errorObject,errorBackup } from "./errorHandling.js";

routes.use(express.json());

// console.log("knexConfig: \n\n", knexConfig, "\n\n db: \n\n", db)



// Get all stored cards
routes.get('/cards', async (req, res) => {
    try {
        const allCards = await db('cards');
        if(allCards.length === 0) {
            return res.status(200).json({ message:"No cards found" });
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
        .where({ id:req.body.id })
        .first();
        if(lookForExistingCard) {
            return res.status(400).json({ message:"Card with ID already exists" })
        }

        const card = await db('cards')
        .returning(['name', 'id'])
        .insert(req.body);
        return res.status(200).json({ message:"Card inserted!", card:card });    
    } catch (error) {
        const message = errorObject[error.errno] || errorBackup;
        res.status(500).json({ message, error });
    }
});



// DESTROY card in database
// Requires multiverse id
routes.delete('/cards/:id', async (req, res) => {
    try {
        const card = await db('cards')
        .where({ id: req.params.id })
        .first();

        const count = await db('cards')
            .where({ id: req.params.id })
            .del();
        if (count > 0) {
            res.status(200).json({message:"deleted", card:card }).end();
        } else {
            res.status(404).json({ message:"Card not found" });
        }
    } catch (error) {
        const message = errorObject[error.errno] || errorBackup;
        res.status(500).json({ message, error });
    }
});


// export default routes;
module.exports = routes;
