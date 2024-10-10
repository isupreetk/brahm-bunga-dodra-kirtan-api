import { timeStamp } from "console";
import knex from "../knex";
import type { Knex } from "knex";

const playlist_data = [
  {
    playlist_id: 1,
    login_id: 1,
    created_at: knex.fn.now(),
    created_by: "Supreet",
    shared_at: knex.fn.now(),
    shared_by: "Supreet",
    deleted_ind: "N",
    deleted_at: null,
    deleted_by: null
  }
];

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("playlist").del();
  
  // Inserts seed entries
  await knex("playlist").insert(playlist_data);
}
