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
  const id = req.query.id ? req.query.id : null;
  const search = req.query.search ? req.query.search : null;
  const offset = req.query.offset ? req.query.offset : null;
  const rows = req.query.rows ? req.query.rows : null;
  const sortCol = req.query.sortCol ? req.query.sortCol : null;
  const sortDir = req.query.sortDir ? req.query.sortDir : null;
  const countOnly = req.query.countOnly ? req.query.countOnly : null;

  res.send({
    data: "",
  });
};

const destroy = async (req: Request, res: Response) => {
  const id = req.params.id;
  const body = req.body;
  const title = body.title ? body.title : null;
  const content = body.content ? body.content : null;
  const deleted = true;
  const updateAll = false;
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
  const title = body.title ? body.title : null;
  const content = body.content ? body.content : null;
  const deleted = false;
  const updateAll = false;
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
};

export default UserController;
