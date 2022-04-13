import { Model } from "objection";
const Follower = require("./follower");

class User extends Model {
  first_name: any;
  last_name: any;
  static get tableName() {
    return "user";
  }
  static get virtualAttributes() {
    return ["fullName"];
  }
  get fullName() {
    return this.first_name + " " + this.last_name;
  }
  static get relationMappings() {
    return {
      follower: {
        relation: Model.HasManyRelation,
        modelClass: Follower,
        join: {
          from: "user.id",
          to: "follwer_mappings.user_id",
        },
      },
      following: {
        relation: Model.HasManyRelation,
        modelClass: Follower,
        join: {
          from: "user.id",
          to: "follwer_mappings.follower_id",
        },
      },
    };
  }
}

module.exports = User;
