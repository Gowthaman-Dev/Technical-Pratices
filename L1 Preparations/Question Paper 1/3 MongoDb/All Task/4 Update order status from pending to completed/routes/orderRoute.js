import express from "express";
import { updateOrderStatus } from "../controller/orderController.js";

const route = express.Router();

route.put("/updatestatus", updateOrderStatus);

export default route;