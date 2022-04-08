import { Request, Response } from "express";

const userService = require('../service/user/UserService');

const getOne = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await userService.getUserById(id);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const geByUserName = async (req: Request, res: Response) => {
  const userName = req.params.username;
  try {
    const [user] = await userService.getUserByUserName(userName);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const addOne = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const user = await userService.createUser(body);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const listAll = async (req: Request, res: Response) => {
  try {
    const user = await userService.getAllUser();
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const destroy = async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id)
    return res.send({
      message: "No id",
    });


  res.send({
    data: "",
  });
};

const updateRecord = async (req: Request, res: Response) => {
  const id = req.params.id;
  const body = req.body;
  if (!id)
    return res.send({
      message: "No id",
    });



  res.send({
    data: "",
  });
};



const UserController = {
  addOne,
  getOne,
  listAll,
  updateRecord,
  destroy,
  geByUserName
};

export default UserController;
