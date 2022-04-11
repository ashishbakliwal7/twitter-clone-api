require("dotenv").config();
const jwt = require("jsonwebtoken");
const userAuth = (req: any, res: any, next: any): any => {
  const token = req.header("token");
  if (!token) return res.status("401").send("access denied");

  try {
    const verified = jwt.verify(token, process.env.JWT_TOKEN);
    console.log(verified);
    req.user = verified;
    next();
  } catch (e) {
    return res.status("400").send("Invalid Token");
  }
};

const middleware = {
  userAuth,
};

export default middleware;
