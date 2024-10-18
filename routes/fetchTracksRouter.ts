import express from "express";
const router = express.Router();
import {fetchTracksByPlaylistID} from "../controllers/fetchTracksController";

router.route("/").get(fetchTracksByPlaylistID);

export default router;
