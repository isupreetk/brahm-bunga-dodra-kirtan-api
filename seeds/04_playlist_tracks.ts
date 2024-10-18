import knex from "../knex";
import type { Knex } from "knex";

const playlist_tracks_data = [
  {
    playlist_id: 1,
    track_id: 1,
    added_on: knex.fn.now(),
    created_at: knex.fn.now(),
    created_by: "Supreet",
    deleted_ind: "N",
    deleted_at: null,
    deleted_by: null
  }
];

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("playlist_tracks").del();
  
  // Inserts seed entries
  await knex("playlist_tracks").insert(playlist_tracks_data);
}
