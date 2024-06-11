const knex = require("knex")(require("../knexfile"));

const settings_data = [
  {
    key: "Version",
    value: "1",
  },
  {
    key: "FileURL",
    value:
      "https://brahmbungadodra.org/kirtanrecords/kirtansearchsourcefiles/kirtansearch04042024.csv",
  },
];

exports.seed = function (knex) {
  return knex("settings")
    .del()
    .then(() => {
      return knex("settings").insert(settings_data);
    });
};
