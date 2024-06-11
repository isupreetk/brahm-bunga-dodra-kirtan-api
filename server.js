const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;

const keyFetchingRoute = require("./routes/fetchKeyRoute");
// const uploadDataFileRoute = require("./routes/uploadDataFileRoute");
const updateFileURLRoute = require("./routes/updateFileURLRoute");

app.use(cors());
app.use(express.json());
// app.use("/data", express.static("data"));

app.use("/settings", keyFetchingRoute);
// app.use("/uploadFile", uploadDataFileRoute);
app.use("/updateFileURL", updateFileURLRoute);

app.get("/", (req, res) => {
  console.log("Get on server");
  return res.send("Welcome to Kirtan Server");
});

app.listen(port, (req, res) => {
  console.log(`Connected on ${port}`);
});
