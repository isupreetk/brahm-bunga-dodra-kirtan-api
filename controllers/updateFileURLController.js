const express = require("express");
const knex = require("knex")(require("../knexfile"));

const updateFileDetails = (req, res) => {
  const fileURL = req.fileURL;
  let value;

  console.log("fileURL", fileURL);

  const getVersionValueWrapper = async () => {
    const getVersionValue = async () => {
      return knex("settings")
        .where("key", "Version")
        .then((data) => {
          console.log("data", data);
          return data[0].value;
        })
        .catch((error) => {
          return error;
        });
    };
    value = await getVersionValue();
    console.log("value", value);
  };
  getVersionValueWrapper();

  return knex("settings")
    .upsert({
      key: "FileURL",
      value: fileURL,
    })
    .then((data) => {
      knex("settings")
        .upsert({
          key: "Version",
          value: parseInt(value) + 1,
        })
        .then((data) => {
          return knex("settings")
            .then((data) => {
              return res.json(data);
            })
            .catch((error) => {
              return res.send(error);
            });
        })
        .catch((error) => {
          return res.send(error);
        });
    })
    .catch((error) => {
      return res.send(error);
    });
};

module.exports = {
  updateFileDetails,
};