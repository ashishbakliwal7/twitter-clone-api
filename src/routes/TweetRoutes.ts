import { Router } from "express";

import TweetController from "../controllers/TweetController";
import middleware from "../utils/auth-middleware";

const router = Router();

// router.get("/", UserController.listAll);

// router.get("/:id", middleware.userAuth, UserController.getOne);

// router.get("/profile/:username", UserController.geByUserName);

router.post("/", middleware.userAuth, TweetController.addTweet);

export default router;
