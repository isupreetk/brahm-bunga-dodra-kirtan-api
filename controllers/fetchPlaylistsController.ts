import express, {Request, Response} from "express";
import knex from "../knex";

export const fetchPlaylistsByUser = (req: Request, res: Response) => {
  let { login_id } = req.params;

  return knex("playlist")
    .rightOuterJoin("playlist_details", "playlist_details.playlist_id", "playlist.playlist_id")
    .where("playlist.login_id", login_id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

//   return knex("playlist")
//   .where("login_id", login_id)
//       .then((data) => {
//         return res.json(data);
//       })
//         .catch((error) => {
//           return res.send(error);
//         })
// };
