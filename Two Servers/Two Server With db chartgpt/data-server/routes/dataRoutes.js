import express from "express"
import verifyToken from "../middleware/verifyToken.js"
import Data from "../models/Data.js"

const router = express.Router()

// get user data
router.get("/dashboard", verifyToken, async (req, res) => {
  const data = await Data.find({ userId: req.user.id })
  res.json({ data })
})

// add data
router.post("/add", verifyToken, async (req, res) => {
  await Data.create({
    userId: req.user.id,
    content: req.body.content
  })

  res.json({ msg: "Data Added ✅" })
})

export default router