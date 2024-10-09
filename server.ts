import express, {Express, Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";

const app: Express = express();

dotenv.config();
const port = process.env.PORT;

import keyFetchingRoute from "./routes/fetchKeyRouter";
import updateFileURLRoute from "./routes/updateFileURLRouter";
import fetchPlaylistsRoute from "./routes/fetchPlaylistsRouter";

app.use(cors());
app.use(express.json());

app.use("/settings", keyFetchingRoute);
app.use("/updateFileURL", updateFileURLRoute);
app.use("/playlists", fetchPlaylistsRoute);

app.get("/", (req: Request, res: Response) => {
  console.log("Get on server");
  return res.send("Welcome to Kirtan Server");
});

app.listen(port, () => {
  console.log(`Connected on ${port}`);
});
