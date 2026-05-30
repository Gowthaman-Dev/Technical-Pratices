import jwt from "jsonwebtoken"
export const verifyUserData = async(req,res,next)=>{
     const token = req.headers.authorization
     if(!token){
        return res.status(400).json({msg:"No Token You Have"})
     }
    try {
      const decode = await jwt.verify(token,process.env.JWT_SCR)
      req.jwtuser = decode
      next()
    } catch (error) {
        return res.status(404).json({msg:"Something Error"})
    }
}