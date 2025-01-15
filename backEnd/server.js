import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";
import authRoutes from "./routes/auth.routes.js";
import logger from "./middleware/logger.js";
dotenv.config();
const app = express();

const port = 3000;
app.use(cors());
app.use(logger);
// api for my router.

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDb();
  console.log("server running on port: ", port);
});
