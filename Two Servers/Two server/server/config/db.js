import mongoose from "mongoose"

const connectDB = async ()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB Connected Successfully ${conn.connection.host}`)
  } catch (error) {
    console.log("DB Error", error)
  }
}

export default connectDB