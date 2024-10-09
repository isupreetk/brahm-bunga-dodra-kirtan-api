import express from "express";
const router = express.Router();
import {fetchPlaylistsByUser} from "../controllers/fetchPlaylistsController";

router.route("/:login_id").get(fetchPlaylistsByUser);

export default router;
