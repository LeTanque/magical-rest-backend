const productionDbConnection = process.env.DATABASE_URL || process.env.NODE_PG_DB;


module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'mtg-magical',
      user:     'test',
      password: 'pass'
    },
    pool: {
      min: 2,
      max: 10
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
