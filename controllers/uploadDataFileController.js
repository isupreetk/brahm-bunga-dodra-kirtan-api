// const express = require("express");
// const knex = require("knex")(require("../knexfile"));

// const createDataFile = (req, res) => {
//   const file = req.file;

//   return knex("settings")
//     .upsert({
//       key: FileURL,
//       value: file.path,
//     })
//     .then((data) => {
//       return res.json(data);
//     })
//     .catch((error) => {
//       return res.send(error);
//     });
// };

// module.exports = {
//   createDataFile,
// };
