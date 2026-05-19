import express from "express"
import cors from "cors"
import dataRoutes from "./routes/dataRoutes.js"
import connectDB from "./config/db.js"
import dotenv from 'dotenv'
dotenv.config()

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/data", dataRoutes)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Data Server running on 7000 http://localhost:${PORT}`))