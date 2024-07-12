import dotenv from 'dotenv';
require('ts-node/register');
import type { Knex } from 'knex';

dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      charset: "utf8",
    },
    migrations: {
      directory: './migrations/',
      extension: 'ts'
    }
  },
  production: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      charset: "utf8",
    },
    migrations: {
      directory: './migrations/',
      extension: 'ts'
    }
  }
};

export default config;
