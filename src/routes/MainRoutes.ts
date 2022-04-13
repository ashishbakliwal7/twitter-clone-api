import { Router } from "express";
import TweetRoutes from "./TweetRoutes";
import UserRoutes from "./UserRoutes";
import LoginController from "../controllers/LoginController";
import FollowerRoutes from "./FollowerRoutes";

const routes = Router();

routes.use("/login", LoginController.login);
routes.use("/user", UserRoutes);
routes.use("/tweet", TweetRoutes);
routes.use("/follower", FollowerRoutes);

export default routes;
