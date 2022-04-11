import { Request, Response } from "express";
import validation from "../utils/validation";
const tweetService = require("../service/tweet/TweetService");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const addTweet = async (req: any, res: Response) => {
  const body = req.body;
  try {
    const { error } = validation.tweetValidation(body);
    if (error) return res.status(400).send(error.details[0].message);
    const tweet = await tweetService.createTweet({
      ...body,
      userId: req.user._id,
    });

    res.json({ message: "Tweeted" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const tweetFeed = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const { error } = validation.loginValidation(body);
    if (error) return res.status(400).send(error.details[0].message);
    const [tweet] = await tweetService.userTweetFeed(body);

    res.json({ message: "Tweeted" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const myTweets = async (req: any, res: Response) => {
  try {
    const tweets = await tweetService.getAllTweet({ userId: req.user._id });
    res.json({ data: tweets });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const TweetController = {
  addTweet,
  tweetFeed,
  myTweets,
};

export default TweetController;
