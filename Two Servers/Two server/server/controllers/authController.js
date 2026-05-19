import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const exist = await User.findOne({ email })
    if (exist) return res.json({ msg: "User already exists" })

    const hash = await bcrypt.hash(password, 10)

    await User.create({
      name,
      email,
      password: hash,
      role: "user" 
    })

    res.json({ msg: "Registered Successfully" })

  } catch (error) {
    res.json({ msg: "Register Error" })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.json({ msg: "Invalid Email" })

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.json({ msg: "Wrong Password" })

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.SECRET,
      { expiresIn: "1h" }
    )

    res.json({ msg: "Login Success", token })

  } catch (error) {
    res.json({ msg: "Login Error" })
  }
}