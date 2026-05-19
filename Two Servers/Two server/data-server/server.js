import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import dataRoutes from "./routes/dataRoutes.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/data", dataRoutes)

const PORT = process.env.PORT || 4000

app.listen(7000, () => {
  console.log(`Data Server running on 7000 http://localhost:${PORT}`)
})