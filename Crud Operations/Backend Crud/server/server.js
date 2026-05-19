import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import crudRoutes from "./routes/crudRoutes.js";
import connectdb from "./config/dp.js";

dotenv.config();
connectdb();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/crud", crudRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});