import User from "../models/User.js"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  await User.create(req.body)
  res.json({ msg: "Registered ✅" })
}

export const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email, password })

  if (!user) return res.json({ msg: "Invalid ❌" })

  const token = jwt.sign({ id: user._id }, process.env.SECRET)

  res.json({ msg: "Login Success ✅", token })
}