import mongoose from "mongoose";

mongoose.set("strictQuery", false);
export const connectDatabase = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/cms_iphone");
  console.log("Database Connected");
};
