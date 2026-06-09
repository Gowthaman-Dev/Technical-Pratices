import Order from "../models/orderModel.js";

export const getCustomerSales = async (req, res) => {
  try {
    const sales = await Order.aggregate([
      {
        $group: {
          _id: "$customerName",
          totalSales: {
            $sum: "$price",
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      totalCustomers: sales.length,
      sales,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};