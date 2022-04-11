import { Request, Response } from "express";
import validation from "../utils/validation";
const loginService = require("../service/login/LoginService");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    console.log(body);
    const { error } = validation.loginValidation(body);
    if (error) return res.status(400).send(error.details[0].message);
    const [user] = await loginService.loginUser(body);
    console.log(user);
    if (user) {
      const token = jwt.sign({ _id: user.id }, process.env.JWT_TOKEN);
      res.json({ token: token }).header("token", token);
    } else {
      res.json({ message: "Invalid Username and pass" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const UserController = {
  login,
};

export default UserController;
