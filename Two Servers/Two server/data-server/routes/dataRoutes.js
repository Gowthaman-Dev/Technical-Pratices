import express from "express"
import verifyToken from "../middleware/verifyToken.js"
import { isAdmin } from "../middleware/adminMiddleware.js"

const router = express.Router()

// normal user
router.get("/dashboard", verifyToken, (req, res) => {
  res.json({ 
    msg: "User Data",
    data: ["Item 1", "Item 2", "Item 3"]
  })
})

// admin only
router.get("/admin", verifyToken, isAdmin, (req, res) => {
  res.json({ 
    msg: "Admin Data 🔥",
    data: ["Admin Item 1", "Admin Item 2"]
  })
})

export default router