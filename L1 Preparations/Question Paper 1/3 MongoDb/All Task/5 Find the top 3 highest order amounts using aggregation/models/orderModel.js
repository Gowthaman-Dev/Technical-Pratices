import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerName: String,
    product: String,
    quantity: Number,
    price: Number,
    status: String
  },
  { timestamps: true }
);

const orderModle = mongoose.model(
  "Order-Collection",
  orderSchema
);

export default orderModle;