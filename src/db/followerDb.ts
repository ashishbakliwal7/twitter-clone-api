import { IFollowerUser } from "../service/follower/IFollowerInterface";

const Follower = require("./models/follower");

class TweetDb {
  async findById(id: number) {
    return await Follower.query().findById(id);
  }

  async getAll(userId: number) {
    return await Follower.query().where("user_id", userId);
  }

  async followUser(data: IFollowerUser) {
    return await Follower.query().insert({
      user_id: data.userId,
      follower_id: data.followingId,
    });
  }

  async unFollowUser(data: IFollowerUser) {
    return await Follower.delete()
      .where("user_id", data.userId)
      .where("follower_id", data.followingId);
  }
}

module.exports = new TweetDb();
