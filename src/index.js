import express from "express";
import bodyParser from "body-parser";

import { connect } from "./config/database.js";

import apiRoutes from "./routes/index.js";

const app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(3000, async () => {
  console.log("Server started on port 3000");

  await connect();
  console.log("Connnected to DB");
});
