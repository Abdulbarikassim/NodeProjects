import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully", connect.connection.host);
  } catch (err) {
    console.error("Connection Failed!", err.message);
    process.exit(1);
  }
};
