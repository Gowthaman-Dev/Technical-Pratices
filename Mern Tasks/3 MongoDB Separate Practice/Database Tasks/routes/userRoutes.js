import express from "express";

import {
  insertUser
} from "../controller/userController.js";

const router = express.Router();

// POST API
router.post(
  "/insert",
  insertUser
);

export default router;