import { Request, Response } from "express";
import validation from "../utils/validation";
const tweetService = require("../service/tweet/TweetService");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const addTweet = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const { error } = validation.loginValidation(body);
    if (error) return res.status(400).send(error.details[0].message);
    const [tweet] = await tweetService.createTweet(body);

    res.json({ message: "Tweeted" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const TweetController = {
  addTweet,
};

export default TweetController;
