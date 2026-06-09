import express from "express";
import { getCustomerSales } from "../controllers/orderController.js";

const router = express.Router();

router.get("/customer-sales", getCustomerSales);

export default router;