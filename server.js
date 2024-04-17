const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// const useSearchParams = require("useSearchParams");
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Get on server");
});

app.get("/settings", (req, res) => {
  console.log("req", req);
  let searchParams = req.query;
  console.log("version", searchParams.version);
  console.log("fileURL", searchParams.fileURL);
});

app.listen(port, (req, res) => {
  console.log(`Connected on ${port}`);
});
