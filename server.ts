// import express, {Express, Request, Response} from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// const app: Express = express();

// dotenv.config();
// const port = process.env.PORT;

// app.use(cors());
// app.use(express.json());

// app.get("/", (req: Request, res: Response) => {
//   console.log("Get on server");
//   return res.send("Welcome to Kirtan Server");
// });

// app.listen(port, () => {
//   console.log(`Connected on ${port}`);
// });

import express from "express";
import keyFetchingRoute from "./src/routes/fetchKeyRouter";
import updateFileURLRoute from "./src/routes/updateFileURLRouter";
import fetchPlaylistsRoute from "./src/routes/fetchPlaylistsRouter";
import fetchTracksRoute from "./src/routes/fetchTracksRouter";

export const routes = express.Router();

routes.use("/settings", keyFetchingRoute);
routes.use("/updateFileURL", updateFileURLRoute);
routes.use("/playlists", fetchPlaylistsRoute);
routes.use("/tracks", fetchTracksRoute);