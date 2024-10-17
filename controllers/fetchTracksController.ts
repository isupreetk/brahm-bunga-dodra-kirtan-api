import express, {Request, Response} from "express";
import knex from "../knex";

export const fetchTracksByPlaylistID = (req: Request, res: Response) => {
  let { playlist_id } = req.query;

  let playlist_list; 
  if (typeof playlist_id === typeof []) {
    playlist_list = playlist_id;
  }
  else {
    playlist_list = [playlist_id];
  }

    return knex("playlist_tracks")
        .where("playlist_id", "in", playlist_list)
        .then((data) => {
            res.json({data: data, error: null});
        })
        .catch((error) => {
            res.send({data: null, error: error});
        });
}