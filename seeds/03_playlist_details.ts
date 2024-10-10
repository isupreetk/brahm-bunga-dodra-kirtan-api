import knex from "../knex";
import type { Knex } from "knex";

const playlist_details_data = [
  {
    playlist_id: 1,
    playlist_name: "Fav",
    playlist_code: 1,
    tracks_count: 2,
    created_at: knex.fn.now(),
    created_by: "Supreet",
    modified_at: knex.fn.now(),
    modified_by: "Supreet"
  }
];

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("playlist_details").del();
  
  // Inserts seed entries
  await knex("playlist_details").insert(playlist_details_data);
}
