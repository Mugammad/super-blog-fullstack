const creds = require('./config/creds.js')

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: creds.DB_NAME,
      user:     creds.DB_USER,
      password: creds.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/db/migrations',
    },
    seeds: {
        directory: __dirname + '/db/seeds',
    },
    ssl: {
      rejectUnauthorized: false
    }
  }

};
