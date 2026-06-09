import express from 'express'
import { dashboard, login, register } from '../controllers/authController.js'
import {verifyToken} from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/register",register)
router.post("/login",login)

router.get("/dashboard",verifyToken,dashboard)

export default router