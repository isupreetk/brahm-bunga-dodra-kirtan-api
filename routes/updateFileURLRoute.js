const express = require("express");
const router = express.Router();
const updateFileURLController = require("../controllers/updateFileURLController");

router.route("/").post(updateFileURLController.updateFileDetails);

module.exports = router;
