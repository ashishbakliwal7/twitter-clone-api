import { ICreateTweet } from "./ITweetInterface";
const tweetDb = require("../../db/tweetDb");
class TweetService {
  async getAllTweet(data: any) {
    console.log(data);
    return await tweetDb.getAll(data.userId);
  }

  async createTweet(data: ICreateTweet) {
    return await tweetDb.createTweet(data);
  }

  async userTweetFeed(data: any) {
    return await tweetDb.tweetFeed(data.userId);
  }
}

module.exports = new TweetService();
