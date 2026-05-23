import jwt from "jsonwebtoken";

export const verifyToken = (
  req,
  res,
  next
) => {

  const token =
    req.headers.authorization;

  // CHECK TOKEN
  if (!token) {

    return res.status(401).json({
      message: "No Token Provided"
    });

  }

  try {

    // VERIFY TOKEN
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // SAVE USER DATA
    req.user = decoded;

    // NEXT ROUTE
    next();

  } catch (error) {

    res.status(401).json({
      message: "Invalid Token"
    });

  }

};