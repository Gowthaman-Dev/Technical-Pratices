import orderModle from "../modle/orderModle.js";

export const getTop3Orders = async (req, res) => {
  try {

    const topOrders = await orderModle.aggregate([
      {
        $sort: {
          price: -1
        }
      },
      {
        $limit: 3
      }
    ]);

    res.status(200).json({
      msg: "Top 3 Orders Retrieved Successfully",
      totalOrders: topOrders.length,
      topOrders
    });

  } catch (error) {

    res.status(500).json({
      msg: error.message
    });

  }
};