import { ICreateTweet } from "../service/tweet/ITweetInterface";

const Tweet = require("./models/tweet");

class TweetDb {
  async findById(id: number) {
    return await Tweet.query().findById(id);
  }

  async getAll() {
    return await Tweet.query();
  }

  async createUser(data: ICreateTweet) {
    return await Tweet.query().insert({
      tweet: data.tweet,
    });
  }
}

module.exports = new TweetDb();
