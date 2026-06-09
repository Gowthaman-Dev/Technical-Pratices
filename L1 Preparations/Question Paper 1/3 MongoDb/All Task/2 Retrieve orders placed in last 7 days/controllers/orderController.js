import Order from "../models/orderModel.js";

export const getLast7DaysOrders = async (req, res) => {
  try {
    const last7Days = new Date()
    last7Days.setDate (last7Days.getDate - 7)

    const orders = await Order.find({
      orderDate: {
        $gte: last7Days,
      },
    });

    res.status(200).json({
      msg: "Orders Retrieved Successfully",
      totalOrders: orders.length,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};