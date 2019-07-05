const dotenv = require("./server.js");

const localPg = {
  host: dotenv.DB_HOST,
  database: 'cards',
  user: 'test',
  password: 'pass',
};
const productionDbConnection = dotenv.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cardDb.sqlite3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
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
    connection: productionDbConnection, 
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
