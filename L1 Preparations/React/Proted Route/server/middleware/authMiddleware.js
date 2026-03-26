import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({ msg: "No token provided" });
    }

    // "Bearer <token>" => split pannி token மட்டும் எடு
    const token = header.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // user info next middleware-க்கு pass பண்ண
    next();

  } catch (error) {
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};