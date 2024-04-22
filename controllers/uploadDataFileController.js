const express = require("express");
const knex = require("knex")(require("../knexfile"));

const createDataFile = (req, res) => {
  const file = req.file;

  console.log("file", file);
  console.log("filename", file.filename);
  // res.send("file saved on server");

  return knex("settings")
    .upsert({
      key: "FileURL",
      value: file.filename,
      // `https://easyservices-cb714e81a4fb.herokuapp.com/data/${file.filename}`,
    })
    .then((data) => {
      return res.json(data);
    })
    .catch((error) => {
      return res.send(error);
    });
};

module.exports = {
  createDataFile,
};
