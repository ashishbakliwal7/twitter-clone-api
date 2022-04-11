import { ICreateTweet } from "../service/tweet/ITweetInterface";

const Tweet = require("./models/tweet");

class TweetDb {
  async findById(id: number) {
    return await Tweet.query().findById(id);
  }

  async getAll(userId: number) {
    return await Tweet.query().where("created_by", userId);
  }

  async createTweet(data: ICreateTweet) {
    return await Tweet.query().insert({
      tweet: data.tweet,
      created_by: data.userId,
    });
  }
}

module.exports = new TweetDb();
