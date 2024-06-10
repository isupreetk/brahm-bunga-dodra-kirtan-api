const knex = require("knex")(require("../knexfile"));

const settings_data = [
  {
    key: "Version",
    value: "1",
  },
  {
    key: "FileURL",
    value:
      "https://b1bd7a3563a979dc2bde-eedbc4687b94bc02c3ca822976a06a6b.ssl.cf1.rackcdn.com/export-tbl_audio-kirtansearch-28-03-2024%20-%20tbl_artistmaster4june2024.csv",
  },
];

exports.seed = function (knex) {
  return knex("settings")
    .del()
    .then(() => {
      return knex("settings").insert(settings_data);
    });
};
