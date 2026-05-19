import express from "express";

import {loginUser,dashboard} from "../controller/authController.js";

import { verifyToken} from "../middleware/authMiddleware.js";

const router = express.Router();

// LOGIN
router.post("/login", loginUser);

// PROTECTED ROUTE
router.get(
  "/dashboard",
  verifyToken,
  dashboard
);

export default router;