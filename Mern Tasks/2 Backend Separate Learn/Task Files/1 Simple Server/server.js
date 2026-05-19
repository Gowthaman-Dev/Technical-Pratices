import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()

app.get("/",(req,res)=>{
    res.send("server Running Successfully")
})

const PORT = 5000

app.listen(PORT,()=>{
    console.log(`Server Connected Successfully http://localhost:${PORT}`);
    
})