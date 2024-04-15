const knex = require("knex")(require("../knexfile"));

const settings_data = [
  {
    key: "Version",
    value: "1",
  },
  {
    key: "FileURL",
    value:
      "https://easyservices-cb714e81a4fb.herokuapp.com/images/kirtanData/kirtanData.csv",
  },
];

exports.seed = function (knex) {
  return knex("settings")
    .del()
    .then(() => {
      return knex("settings").insert(settings_data);
    });
};
