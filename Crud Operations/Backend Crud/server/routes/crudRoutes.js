import express from "express";
import {
  createData,
  getData,
  getSingle,
  updateData,
  deleteData
} from "../controller/crudController.js";

const router = express.Router();

router.post("/create", createData);
router.get("/", getData);
router.get("/:id", getSingle);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

export default router;