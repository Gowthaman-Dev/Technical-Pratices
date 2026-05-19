import express from 'express'
import { getusers } from '../controller/userController.js'
 
const route = express.Router()

route.get("/",getusers)

export default route