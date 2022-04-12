import { IFollowerUser } from "./IFollowerInterface";

const followerDb = require("../../db/followerDb");
class TweetService {
  async getAllFollower(userId: number) {
    return await followerDb.getAll(userId);
  }

  async followUser(data: IFollowerUser) {
    return followerDb.followUser({
      userId: data.userId,
      followingId: data.followingId,
    });
  }

  async unFollowUser() {
    return await followerDb.unFollowUser();
  }
}

module.exports = new TweetService();
