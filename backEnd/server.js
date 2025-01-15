import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";
dotenv.config();

const app = express();

const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello wolrd!");
});

app.listen(port, () => {
  connectDb();
  console.log("server running on port: ", port);
});
