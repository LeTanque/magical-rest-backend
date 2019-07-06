// require('dotenv').config(); // Import dotenv config
// const dotenv = require("../server.js");
// const environment = process.env.NODE_PG_DB || 'development';

const enviro = 'development';

const config = require('../knexfile.js')[enviro];
const knex = require('knex')(config);

console.log(knex)

module.exports = knex;
