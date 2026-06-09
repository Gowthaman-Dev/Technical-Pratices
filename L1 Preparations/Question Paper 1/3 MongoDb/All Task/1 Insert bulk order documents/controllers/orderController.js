import Order from "../models/orderModel.js";

export const insertBulkOrders = async (req, res) => {
  try {
    const orders = [
      {
        orderId: 1001,
        customerName: "Gowtham",
        product: "Laptop",
        quantity: 1,
        price: 55000,
        status: "Delivered",
      },
      {
        orderId: 1002,
        customerName: "Arun",
        product: "Mobile",
        quantity: 2,
        price: 20000,
        status: "Pending",
      },
      {
        orderId: 1003,
        customerName: "Kumar",
        product: "Headphone",
        quantity: 3,
        price: 1500,
        status: "Shipped",
      },
      {
        orderId: 1004,
        customerName: "Ram",
        product: "Keyboard",
        quantity: 1,
        price: 1200,
        status: "Delivered",
      },
      {
        orderId: 1005,
        customerName: "Sam",
        product: "Mouse",
        quantity: 2,
        price: 800,
        status: "Pending",
      },
    ];

    const result = await Order.insertMany(orders);

    res.status(200).json({
      msg: "Bulk Orders Inserted Successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error",
      error: error.message,
    });
  }
};