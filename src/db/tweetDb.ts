import { ICreateTweet } from "../service/tweet/ITweetInterface";
const Follower = require("./models/follower");

const Tweet = require("./models/tweet");

class TweetDb {
  async findById(id: number) {
    return await Tweet.query().findById(id);
  }

  async getAll(userId: number) {
    return await Tweet.query()
      .withGraphFetched("user")
      .where("created_by", userId);
  }

  async tweetFeed(userId: number) {
    let users = await Follower.query()
      .select("follower_id")
      .where("user_id", userId);
    users = users.map((item: any) => item.follower_id);

    return await Tweet.query()
      .withGraphFetched("user")
      .whereIn("created_by", [...users])
      .orderBy("created_at", "desc");
  }

  async createTweet(data: ICreateTweet) {
    return await Tweet.query().insert({
      tweet: data.tweet,
      created_by: data.userId,
    });
  }
}

module.exports = new TweetDb();
