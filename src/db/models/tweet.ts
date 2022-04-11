const { Model } = require("objection");

export default class Tweet extends Model {
  static get tableName() {
    return "tweet";
  }
}
