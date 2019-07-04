const localPg = {
  host: 'localhost',
  database: 'cards',
  user: 'test',
  password: 'pass',
};
const productionDbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
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
    }
  },

  production: {
    client: 'pg',
    connection: productionDbConnection, // could be an object or a string
    // migrations: {
    //   directory: './data/migrations',
    // },
    // seeds: {
    //   directory: './data/seeds',
    // },
  },
};
