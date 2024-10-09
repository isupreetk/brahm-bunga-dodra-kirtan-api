import express from "express";
const router = express.Router();
import {fetchTracks} from "../controllers/fetchTracksController";

router.route("/:playlist_id").get(fetchTracks);

export default router;
