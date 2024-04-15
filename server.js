const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  console.log("Get on server");
});

app.listen(port, (req, res) => {
  console.log(`Connected on ${port}`);
});
