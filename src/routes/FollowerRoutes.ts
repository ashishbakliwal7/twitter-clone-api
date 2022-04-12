import { Router } from "express";

import FollowerController from "../controllers/FollowerController";
import middleware from "../utils/auth-middleware";

const FollowerRoutes = Router();

FollowerRoutes.get(
  "/my-followers",
  middleware.userAuth,
  FollowerController.myFollowers
);

FollowerRoutes.post("/follow", middleware.userAuth, FollowerController.follow);

FollowerRoutes.post(
  "/un-follow",
  middleware.userAuth,
  FollowerController.unFollow
);

export default FollowerRoutes;
