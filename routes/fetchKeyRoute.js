const express = require("express");
const router = express.Router();
const keyFetchingController = require("../controllers/fetchKeyController");

router.route("/").get(keyFetchingController.fetchKey);

module.exports = router;