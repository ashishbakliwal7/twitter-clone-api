import { ICreateTweet } from "./ITweetInterface";
const tweetDb = require("../../db/tweetDb");
class TweetService {
  async getAllTweet() {
    return await tweetDb.getAll();
  }

  async createTweet(data: ICreateTweet) {
    return tweetDb.createTweet(data);
  }
}

module.exports = new TweetService();
