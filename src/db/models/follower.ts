import { Model } from "objection";

export default class Follower extends Model {
  static get tableName() {
    return "follwer_mappings";
  }
}
