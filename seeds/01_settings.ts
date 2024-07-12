import knex from "../knex";
import type { Knex } from "knex";

const settings_data = [
  {
    key: "Version",
    value: "1",
  },
  {
    key: "FileURL",
    value:
      "https://kirtansearchdb.s3.amazonaws.com/export-tbl_audio-kirtansearch-28-03-2024+-+tbl_artistmaster4june2024.csv",
  },
];

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("settings").del();
  
  // Inserts seed entries
  await knex("settings").insert(settings_data);
}
