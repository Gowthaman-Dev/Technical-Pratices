import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderId: Number,
    customerName: String,
    product: String,
    quantity: Number,
    price: Number,
    status: String,
    orderDate: {
      type : Date,
      default : Date.now
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;