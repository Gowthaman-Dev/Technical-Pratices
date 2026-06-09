import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import orderRoute from "./routes/orderRoute.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/orders", orderRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});