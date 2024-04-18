const express = require("express");
const knex = require("knex")(require("../knexfile"));

const fetchKey = (req, res) => {
  let searchParams = req.query;

  if (typeof searchParams.key === typeof []) {
    return knex("settings")
      .where("key", "in", searchParams.key)
      .then((data) => {
        return res.json(data);
      })
      .catch((error) => {
        return res.send(error);
      });
  } else {
    return knex("settings")
      .where("key", searchParams.key)
      .then((data) => {
        return res.json(data);
      })
      .catch((error) => {
        return res.send(error);
      });
  }
};

module.exports = {
  fetchKey,
};
