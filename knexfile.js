// REQUIRED FOR KNEXFILE TO ACKNOWLEDGE ENV WITH LOCAL MIGRATIONS
// const dotenv = require("dotenv");
// dotenv.config({ debug: true });
// console.log('PORT NODE_ENV DB_FILE DATABASE_URL', 
// "\n ---> ", process.env.PORT, 
// "\n ---> ", process.env.DB_ENV,
// "\n ---> ", process.env.DB_FILE,
// "\n ---> ", process.env.DATABASE_URL);


const dbConnection = process.env.DATABASE_URL || "localhost";


module.exports = {
  development: {
    client: 'pg',
    connection: dbConnection,
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    useNullAsDefault: true,
  },
  production: {
    client: 'pg',
    connection: dbConnection, 
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    useNullAsDefault: true
  },
};



