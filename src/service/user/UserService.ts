import { ICreateUser } from "./IUserInterface";
const userDb = require("../../db/userDb");
class UserService {
  getAllUser() {
    return userDb.getAll();
  }

  getUserById(id: number) {
    return userDb.findById(id);
  }

  getUserByUserName(userName: string) {
    return userDb.findByUserName(userName);
  }

  createUser(data: ICreateUser) {
    return userDb.createUser(data);
  }
}

module.exports = new UserService();
