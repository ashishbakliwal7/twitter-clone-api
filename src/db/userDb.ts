import { ICreateUser } from "../service/user/IUserInterface";

const User = require("./models/user");

class UserDb {
  async findById(id: number) {
    return await User.query().findById(id);
  }

  async getAll() {
    return User.query();
  }

  async createUser(data: ICreateUser) {
    return await User.query().insert({
      first_name: data.firstName,
      last_name: data.lastName,
      password: data.password,
      email: data.email,
      phone: data.phone,
      username: data.userName,
    });
  }

  async findByUserName(userName: string) {
    return await User.query().where("username", userName);
  }

  async loginUser(email: string, password: string) {
    return User.query().where("email", email).where("password", password);
  }
}

module.exports = new UserDb();
