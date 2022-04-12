import { Request, Response } from "express";
import validation from "../utils/validation";
const followerService = require("../service/follower/FollowerService");

const follow = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const [followUser] = await followerService.followUser(body);
    if (followUser) {
      return res.json({ followUser: followUser });
    } else {
      return res.json({ message: "Already Followed" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const unFollow = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const [unFollowUser] = await followerService.unFollowUser(body);
    if (unFollowUser) {
      return res.json({ unFollowUser: unFollowUser });
    } else {
      return res.json({ message: "Already unFollowed" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const myFollowers = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const allFolllower = await followerService.getAllFollower(body);
    if (allFolllower) {
      return res.json({ data: allFolllower });
    } else {
      return res.json({ message: "No follower" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const UserController = {
  follow,
  unFollow,
  myFollowers,
};

export default UserController;
