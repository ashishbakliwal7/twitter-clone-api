import { Router } from "express";

import UserController from "../controllers/UserController";
import middleware from "../utils/auth-middleware";

const router = Router();

router.get("/", UserController.listAll);

router.get("/:id", middleware.userAuth, UserController.getOne);

router.get("/profile/:username", UserController.geByUserName);

router.post("/", UserController.addOne);

router.put("/:id", UserController.updateRecord);

router.delete("/:id", UserController.destroy);

export default router;
