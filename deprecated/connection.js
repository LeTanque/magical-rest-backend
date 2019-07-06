// require('dotenv').config(); // Import dotenv config
// const dotenv = require("../server.js");
// const enviro = 'development';

const enviro = process.env.NODE_DB_ENV || 'development';


const config = require('../knexfile.js')[enviro];
const knex = require('knex')(config);


module.exports = knex;
