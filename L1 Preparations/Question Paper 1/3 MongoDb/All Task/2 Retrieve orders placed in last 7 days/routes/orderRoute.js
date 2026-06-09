import express from "express";
import { getLast7DaysOrders } from "../controllers/orderController.js";

const router = express.Router();

router.get("/last7days", getLast7DaysOrders);

export default router;