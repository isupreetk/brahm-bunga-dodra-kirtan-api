const express = require("express");
const router = express.Router();
const uploadDataFileController = require("../controllers/uploadDataFileController");
const multer = require("multer");
const upload = multer({ dest: "data/" });
const fs = require("fs");

router
  .route("/")
  .post(upload.single("file"), uploadDataFileController.createDataFile);

module.exports = router;
