import express, {Request, Response} from "express";
import knex from "../knex";

export const fetchTracks = (req: Request, res: Response) => {
  let { playlist_id } = req.params;

  return knex("playlist_tracks")
    .where("playlist_id", "in", playlist_id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.send(error);
    });
};