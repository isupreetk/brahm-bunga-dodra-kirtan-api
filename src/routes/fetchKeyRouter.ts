import express from "express";
const router = express.Router();
import {fetchKey} from "../controllers/fetchKeyController";

router.route("/").get(fetchKey);

export default router;