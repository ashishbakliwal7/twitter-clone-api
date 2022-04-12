import { Model } from "objection";
const User = require("./user");

class Tweet extends Model {
  static get tableName() {
    return "tweet";
  }
  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "tweet.created_by",
          to: "user.id",
        },
      },
    };
  }
}

module.exports = Tweet;
