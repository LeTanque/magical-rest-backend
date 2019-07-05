// require('dotenv').config(); // Import dotenv config
const dotenv = require("../server.js");

const environment = dotenv.DB_ENV || 'development';

const config = require('../knexfile.js')[environment];
const knex = require('knex')(config);


module.exports = knex;
