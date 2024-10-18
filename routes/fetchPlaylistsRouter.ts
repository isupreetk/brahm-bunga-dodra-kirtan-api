import express from "express";
const router = express.Router();
import {fetchPlaylistsByUser} from "../controllers/fetchPlaylistsController";

router.route("/").get(fetchPlaylistsByUser);

export default router;
