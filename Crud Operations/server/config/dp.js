import mongoose from "mongoose";

const connectdb =async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDb Is Connected Successfully ${conn.connection.host}`);
    } catch (error) {
        console.log(`MongooDb Connection Failed`);
        process.exit(1)
    }
}

export default connectdb
