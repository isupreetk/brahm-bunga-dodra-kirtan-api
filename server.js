const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;

const keyFetchingRoute = require("./routes/fetchKeyRouter");
const updateFileURLRoute = require("./routes/updateFileURLRouter");

app.use(cors());
app.use(express.json());

app.use("/settings", keyFetchingRoute);
app.use("/updateFileURL", updateFileURLRoute);

app.get("/", (req, res) => {
  console.log("Get on server");
  return res.send("Welcome to Kirtan Server");
});

app.listen(port, (req, res) => {
  console.log(`Connected on ${port}`);
});
