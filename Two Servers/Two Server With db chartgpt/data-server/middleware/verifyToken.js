import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) return res.json({ msg: "No Token ❌" })

  try {
    const decoded = jwt.verify(token, process.env.SECRET)
    req.user = decoded
    next()
  } catch {
    res.json({ msg: "Invalid Token ❌" })
  }
}

export default verifyToken