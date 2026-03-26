import express from "express";
import { register, login, dashboard } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login",    login);

// verifyToken => protected route
router.get("/dashboard", verifyToken, dashboard);

export default router;