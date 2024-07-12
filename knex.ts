import Knex from 'knex';
import knexConfig from "./knexfile";
import dotenv from "dotenv";
dotenv.config();

const environment = process.env.NODE_ENV || "development";

const config = knexConfig[environment];

if (!config) {
    throw new Error(`Knex configuration for environment "${environment}" not found.`);
}

const knex = Knex(config);

export default knex;

