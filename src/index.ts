import bodyParser from "body-parser";
import express from "express";

import UserRoutes from "./routes/UserRoutes";
import db from "./db/db"
export const app = express();

db.initiate()

var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/user", UserRoutes);

app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
