import { ICreateTweet } from "./ITweetInterface";
const tweetDb = require("../../db/tweetDb");
class TweetService {
  async getAllTweet(data: any) {
    return await tweetDb.getAll(data.userId);
  }

  async createTweet(data: ICreateTweet) {
    return tweetDb.createTweet(data);
  }

  async userTweetFeed() {
    return await tweetDb.getAll();
  }
}

module.exports = new TweetService();
