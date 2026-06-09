import orderModle from "../modle/orderModle.js";

export const updateOrderStatus = async (req, res) => {
  try {

    const updateData = await orderModle.updateMany(
      {
        status: "Pending"
      },
      {
        $set: {
          status: "Completed"
        }
      }
    );

    res.status(200).json({
      msg: "Order Status Updated Successfully",
      updateData
    });

  } catch (error) {

    res.status(500).json({
      msg: "Something Error",
      error: error.message
    });

  }
};