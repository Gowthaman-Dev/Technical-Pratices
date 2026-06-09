import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectdb from "./congif/db.js";
import route from "./route/orderRoute.js";

dotenv.config();

connectdb();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/orders", route);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`);
});