
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../modles/userModel.js";

// Register
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({ name, email, password: hashedPassword });

    return res.status(200).json({ msg: "Registered successfully" });

  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ msg: "Login successful", token });

  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
};

// Dashboard - protected
export const dashboard = async (req, res) => {
  try {
    // req.user => verifyToken middleware set panni irukum
    const users = await UserModel.find();
    return res.status(200).json({ msg: "Welcome to dashboard", users, currentUser: req.user });
  } catch (error) {
    return res.status(500).json({ msg: "Server error" });
  }
};