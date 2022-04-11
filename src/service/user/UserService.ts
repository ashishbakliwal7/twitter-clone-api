import { ICreateUser } from "./IUserInterface";
const userDb = require("../../db/userDb");
class UserService {
  async getAllUser() {
    return await userDb.getAll();
  }

  async getUserById(id: number) {
    return userDb.findById(id);
  }

  async getUserByUserName(userName: string) {
    return userDb.findByUserName(userName);
  }

  async createUser(data: ICreateUser) {
    return userDb.createUser(data);
  }
}

module.exports = new UserService();
