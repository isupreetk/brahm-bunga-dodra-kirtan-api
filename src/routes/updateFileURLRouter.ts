import express from "express";
const router = express.Router();
import {updateFileDetails} from "../controllers/updateFileURLController";

router.route("/").post(updateFileDetails);

export default router;
