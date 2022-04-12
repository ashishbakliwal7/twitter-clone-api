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

  async userTweetFeed() {
    return await tweetDb.tweetFeed();
  }
}

module.exports = new TweetService();
