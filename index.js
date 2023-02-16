import express from "express";
import { connectDatabase } from "./db.js";
import cors from "cors";
import path from "path";
import router from "./routes/router.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", router);
app.use("/products/uploads", express.static("/uploads"));
connectDatabase();
app.listen(5000, () => {
  console.log("Server up and running");
});
