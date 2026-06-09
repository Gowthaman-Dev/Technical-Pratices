import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderId: Number,
    customerName: String,
    product: String,
    quantity: Number,
    price: Number,
    status: String,
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;