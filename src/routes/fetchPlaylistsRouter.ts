import express from "express";
const router = express.Router();
import {fetchPlaylistsByUser} from "../controllers/fetchPlaylistsController";

/**
 * @swagger
 * /playlists?{login_id}:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     parameters: 
 *       - in: query 
 *         name: key
 *         description: To determine current version and data used in the application
 *         schema: 
 *           type: string
 *     responses:
 *       200:
 *         description: Selected Key value(s) retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       key:
 *                         type: string
 *                         description: The key.
 *                         example: Version / FileURL
 *                       value:
 *                         type: string
 *                         description: The values.
 *                         example: 1 / <www.the_file_url.com>
 */

router.route("/").get(fetchPlaylistsByUser);

export default router;
