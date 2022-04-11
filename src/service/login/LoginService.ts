import { ILoginUser } from "./ILoginInterface";
const userDb = require("../../db/userDb");
class LoginService {
  async loginUser(data: ILoginUser) {
    console.log(data.email);
    return await userDb.loginUser(data.email, data.password);
  }
}

module.exports = new LoginService();
