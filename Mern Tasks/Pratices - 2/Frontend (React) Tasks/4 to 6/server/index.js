import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import route from "./route/jobRoute.js"
import connectdb from "./congif/db.js"

dotenv.config()
connectdb()
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/jobprotal",route)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server Connceted Successfully http://localhost:${PORT}`);
    
})

