import { Router } from "express";

import UserController from "../controllers/UserController";
import middleware from "../utils/auth-middleware";

const UserRoutes = Router();

UserRoutes.get("/", UserController.listAll);

UserRoutes.get("/:id", middleware.userAuth, UserController.getOne);

UserRoutes.get("/profile/:username", UserController.geByUserName);

UserRoutes.post("/", UserController.addOne);

UserRoutes.put("/:id", UserController.updateRecord);

UserRoutes.delete("/:id", UserController.destroy);

export default UserRoutes;
