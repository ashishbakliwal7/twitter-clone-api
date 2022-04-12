import { Router } from "express";

import TweetController from "../controllers/TweetController";
import middleware from "../utils/auth-middleware";

const TweetRoutes = Router();

// router.get("/", UserController.listAll);

// router.get("/:id", middleware.userAuth, UserController.getOne);

// router.get("/profile/:username", UserController.geByUserName);
TweetRoutes.get("/my-tweets", middleware.userAuth, TweetController.myTweets);

TweetRoutes.get("/feed", middleware.userAuth, TweetController.tweetFeed);

TweetRoutes.post("/", middleware.userAuth, TweetController.addTweet);

export default TweetRoutes;
