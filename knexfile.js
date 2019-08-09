const productionDbConnection = process.env.DATABASE_URL || process.env.NODE_PG_DB;


module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgrease',
      password : 'slick',
      database : 'mtg-magical',
      charset: 'utf8'
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
