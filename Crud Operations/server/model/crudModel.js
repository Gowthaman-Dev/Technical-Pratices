import mongoose from "mongoose";

const crudSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
}, { timestamps: true });

const Crud = mongoose.model("crud", crudSchema);

export default Crud;