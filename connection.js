// require('dotenv').config(); // Import dotenv config
// const server = require("../server.js");
// const enviro = 'development';

const enviro = process.env.NODE_DB_ENV || 'development';


const config = require('../knexfile.js')[enviro];
const knex = require('knex')(config);


console.log("knex: ", knex)

module.exports = knex;
