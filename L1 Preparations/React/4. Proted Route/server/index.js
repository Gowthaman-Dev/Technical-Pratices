import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectdb from './config/db.js'
import router from './routes/authRoutes.js'


dotenv.config()
connectdb()
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth",router)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
  console.log(`Server Is Connected http://localhost:${PORT}`);
})