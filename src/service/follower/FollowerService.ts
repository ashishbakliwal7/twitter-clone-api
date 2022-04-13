import { IFollowerUser } from "./IFollowerInterface";

const followerDb = require("../../db/followerDb");
class TweetService {
  async getAllFollower(userId: number) {
    return await followerDb.getAll(userId);
  }

  async followUser(data: IFollowerUser) {
    console.log(data);
    return followerDb.followUser({
      userId: data.userId,
      followingId: data.followingId,
    });
  }

  async unFollowUser(data: IFollowerUser) {
    return await followerDb.unFollowUser({
      userId: data.userId,
      followingId: data.followingId,
    });
  }
}

module.exports = new TweetService();
