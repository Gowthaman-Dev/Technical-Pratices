import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    password:String
},{timestamps:true})

const modlejob  = mongoose.model("jobPortal-User-Register",jobSchema)

export default modlejob