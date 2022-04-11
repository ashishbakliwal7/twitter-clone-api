import { Router } from "express";

import TweetController from "../controllers/TweetController";
import middleware from "../utils/auth-middleware";

const router = Router();

// router.get("/", UserController.listAll);

// router.get("/:id", middleware.userAuth, UserController.getOne);

// router.get("/profile/:username", UserController.geByUserName);
router.get("/my-tweets", middleware.userAuth, TweetController.myTweets);

router.get("/feed", middleware.userAuth, TweetController.tweetFeed);

router.post("/", middleware.userAuth, TweetController.addTweet);

export default router;
