const { Model } = require("objection");

export default class User extends Model {
  static get tableName() {
    return "user";
  }
}
