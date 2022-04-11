import bodyParser from "body-parser";
import express from "express";

import UserRoutes from "./routes/UserRoutes";
import TweetRoutes from "./routes/TweetRoutes";
import db from "./db/db";
import LoginController from "../src/controllers/LoginController";

export const app = express();

db.initiate();

var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/user", UserRoutes);
app.use("/tweet", TweetRoutes);
app.use("/login", LoginController.login);

app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
