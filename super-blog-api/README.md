# Code Review

## Tickets to complete.
### This is linked to backend more
1. Remove the .gitignore in the main folder

2. Security
    - knexfile.js
        - use config file to import database values (make more secure)
        ```ruby
        const creds = require'../config/creds.js'
        module.exports = {
        development: {
            client: "pg",
            connection: {
            host: creds.DB_HOST,
            port: creds.DB_PORT,
            database: creds.DB_NAME,
            user: creds.DB_USER,
            password: creds.DB_PASS,
            },
            migrations: {
            directory: "./db/migrations",
            },
            seeds: {
            directory: "./db/seeds",
            },
        },
        };
        ```
    - main index.js
        - dotenv (hide the port with a .env file)

## Conclusion
You guys are behind with backend, need to step up the game with more functionality. 