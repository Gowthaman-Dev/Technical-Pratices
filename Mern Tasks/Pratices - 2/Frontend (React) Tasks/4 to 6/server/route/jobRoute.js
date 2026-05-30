import express from 'express'
import { jobregister , joblogin, getdashboard} from '../controller/jobController.js'
import { verifyUserData } from '../middleware/authMiddleWare.js'

const route = express.Router()

route.post("/register",jobregister)
route.post("/login",joblogin)
route.get('/dashboardjob',verifyUserData,getdashboard)

export default route

//http://localhost:5000/api/jobprotal/register