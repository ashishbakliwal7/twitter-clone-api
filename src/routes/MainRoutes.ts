import { Router } from "express";
import TweetRoutes from "./TweetRoutes";
import UserRoutes from "./UserRoutes";
import LoginController from "../controllers/LoginController";

const routes = Router();

routes.use("/login", LoginController.login);
routes.use("/user", UserRoutes);
routes.use("/tweet", TweetRoutes);

export default routes;
