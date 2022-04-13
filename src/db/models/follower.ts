import { Model } from "objection";

class Follower extends Model {
  static get tableName() {
    return "follwer_mappings";
  }
}

module.exports = Follower;
