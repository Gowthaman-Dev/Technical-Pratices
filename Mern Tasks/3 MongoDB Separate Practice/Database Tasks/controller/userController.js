import userModel from "../model/userModel.js";

// INSERT DATA
export const insertUser = async (
  req,
  res
) => {

  try {

    const { name, email, age } =
      req.body;

    const newUser =
      await userModel.create({
        name,
        email,
        age
      });

    res.status(200).json({
      message: "User Added",
      data: newUser
    });

  } catch (error) {

    res.status(400).json({
      message: "Insert Error"
    });

  }

};