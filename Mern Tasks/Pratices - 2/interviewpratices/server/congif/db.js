import mongoose from "mongoose";

const connectdb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGOOSE_URL)
        console.log(`MongoDb Connected Successfully ${conn.connection.host}`);
    } catch (error) {
        console.log(`error Mongoodb la`,error);
        process.exit(1)
    }
}

export default connectdb