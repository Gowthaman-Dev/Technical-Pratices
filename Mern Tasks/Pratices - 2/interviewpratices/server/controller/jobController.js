import jwt from 'jsonwebtoken'
import modlejob from "../modle/jobModle.js";
import bcrypt from 'bcrypt'

export const jobregister = async (req, res) => {
    try {
        const { name, email, password, number } = req.body
        console.log(email);
        const checkemail = await modlejob.findOne({ email })
        if (checkemail) {
            return res.status(404).json({ msg: "This Email Already Used" })
        }
        const hasspass = await bcrypt.hash(password,10)
        const registerinfo = await modlejob.create({ name, email, password:hasspass, number })
        res.status(200).json({ msg: "Successfully Register", registerinfo })
    } catch (error) {
        res.status(200).json({ msg: "Give me a New Email"})

    }
}

export const joblogin = async(req,res)=>{
    try {
        const {email,password} = req.body
        const checkemail = await modlejob.findOne({email})
        if(!checkemail){
            return res.status(404).json({msg:'Invaild Email'})
        }
        const compass = await bcrypt.compare(password,checkemail.password)
        if(!compass){
            return res.status(400).json({msg:"Incorrect Password"})
        }
        const tokengen = await jwt.sign({name:checkemail.name,email:checkemail.email},process.env.JWT_SCR,{expiresIn:'2h'})
        res.status(200).json({msg:"SuccessFully Token Created",token:tokengen})
    } catch (error) {
        res.status(404).json({msg:"Something Error"})
    }
}

export const getdashboard = async(req,res)=>{
    try {
        const getdata = await modlejob.find()
        res.status(200).json({msg:"Message Getting Successfully",getdatas:getdata})
    } catch (error) {
        return res.status(400).json({msg:"Something Error On My DashBoard"})
    }
}