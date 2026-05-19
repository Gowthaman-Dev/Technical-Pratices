import express from 'express'
import route from './routes/userRoutes.js'

const app = express()

app.use(express.json())

app.use("/user",route)

app.listen(5000,()=>{
  console.log(`server connected successfully http://localhost:5000`);
  
})