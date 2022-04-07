import { ICreateUser } from "../service/user/IUserInterface";

const User = require("./models/user");

class UserDb {
  findById(id: number) {
    return User.query().findById(id);
  }

  createUser(data: ICreateUser) {
    return User.query().insert({
      first_name: data.firstName,
      last_name: data.lastName,
      password: data.password,
      email: data.email,
      phone: data.phone,
      username: data.userName,
    });
  }

  findByUserName(userName: string) {
    return User.query().where("user_name", userName);
  }
}

module.exports = new UserDb();
