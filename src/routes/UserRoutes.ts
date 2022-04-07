import { Router } from "express";

import UserController from "../controllers/UserController";

const router = Router();

router.get("/", UserController.listAll);

router.get("/:id", UserController.getOne);

router.post("/", UserController.addOne);

router.put("/:id", UserController.updateRecord);

router.delete("/:id", UserController.destroy);

export default router;