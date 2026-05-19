import mongoose from "mongoose"

const dataSchema = new mongoose.Schema({
  userId: String,
  content: String
})

export default mongoose.model("Data", dataSchema)