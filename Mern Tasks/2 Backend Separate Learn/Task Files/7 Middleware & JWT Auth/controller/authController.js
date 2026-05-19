import jwt from "jsonwebtoken";

// LOGIN CONTROLLER
export const loginUser = (req, res) => {

  const { email, password } = req.body;

  // SIMPLE LOGIN CHECK
  if (
    email === "rocky@gmail.com" &&
    password === "1234"
  ) {

    // CREATE TOKEN
    const token = jwt.sign(
      {
        email: email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h"
      }
    );

    return res.status(200).json({
      message: "Login Success",
      token
    });

  }

  res.status(401).json({
    message: "Invalid Email or Password"
  });

};

// DASHBOARD
export const dashboard = (req, res) => {

  res.json({
    message: "Welcome Dashboard",
    user: req.user
  });

};