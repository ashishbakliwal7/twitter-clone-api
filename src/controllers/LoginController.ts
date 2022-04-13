import { Request, Response } from "express";
import validation from "../utils/validation";
const loginService = require("../service/login/LoginService");
const jwt = require("jsonwebtoken");

const login = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    console.log(body);
    const { error } = validation.loginValidation(body);
    if (error) return res.status(400).send(error.details[0].message);
    const [user] = await loginService.loginUser(body);
    if (user) {
      const token = jwt.sign({ _id: user.id }, process.env.JWT_TOKEN);
      return res.json({ token: token });
    } else {
      return res.status(401).json("invalid");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const UserController = {
  login,
};

export default UserController;
