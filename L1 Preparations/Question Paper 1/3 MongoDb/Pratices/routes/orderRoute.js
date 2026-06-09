import express from "express";
import { getTop3Orders } from "../controller/orderController.js";

const route = express.Router();

route.get("/top3orders", getTop3Orders);

export default route;