import express, {Request, Response} from "express";
import knex from "../knex";

export const fetchKey = (req: Request, res: Response) => {
  let searchParams = req.query;

  if (typeof searchParams.key === typeof []) {
    return knex("settings")
      .where("key", "in", searchParams.key)
      .then((data) => {
        return res.json(data);
      })
      .catch((error) => {
        return res.send(error);
      });
  } else {
    return knex("settings")
      .where("key", searchParams.key)
      .then((data) => {
        return res.json(data);
      })
      .catch((error) => {
        return res.send(error);
      });
  }
};

// export default fetchKey;
