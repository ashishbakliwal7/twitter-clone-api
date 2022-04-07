import { ICreateUser } from "./IUserInterface";
const userDb = require('../../db/userDb');
class UserService {
  getUserById(id: number) {
    return userDb.findById(id);
  }

  getUserByUserName(userName: string) {
  return userDb.findByUserName(userName);
  }

  createUser(data: ICreateUser) {
    return userDb.create(data);
  }
}

module.exports = new UserService();
