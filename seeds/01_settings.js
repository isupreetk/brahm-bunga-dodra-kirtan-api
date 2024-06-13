const knex = require("knex")(require("../knexfile"));

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

exports.seed = function (knex) {
  return knex("settings")
    .del()
    .then(() => {
      return knex("settings").insert(settings_data);
    });
};
