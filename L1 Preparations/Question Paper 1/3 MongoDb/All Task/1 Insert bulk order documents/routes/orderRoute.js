import express from "express";
import { insertBulkOrders } from "../controllers/orderController.js";

const router = express.Router();

router.post("/bulk-orders", insertBulkOrders);

export default router;