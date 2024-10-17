import express, { Request, Response } from "express";
import knex from "../knex";

export const fetchPlaylistsByUser = (req: Request, res: Response) => {
  let { login_id } = req.query;

  if (!login_id) {
    // validation to check for login_id
    return res.status(400).send({data: null, error:`login_id is missing`});
  } else {
    return knex("playlist")
      .select(
        "playlist_details.playlist_id",
        "playlist_details.playlist_name",
        "playlist_details.playlist_code",
        "playlist_details.tracks_count",
        "playlist_details.created_at",
        "playlist_details.created_by",
        "playlist_details.modified_at",
        "playlist_details.modified_by"
      )
      .join(
        "playlist_details",
        "playlist_details.playlist_id",
        "playlist.playlist_id"
      )
      .where("playlist.login_id", login_id)
      .then((data) => {
        res.json({data: data, error: null});
      })
      .catch((error) => {
        res.send({data: null, error: error});
      });
  }
};
