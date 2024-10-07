import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"

const isLoggedIn = async(req,res,next)=>{
    if(!req.cookies.token){
        return res.status(401).send("unauthorized user")
    }
    const token = req.cookies.token
    console.log(process.env.JWT_JEY)
    const decoded = jwt.verify(token,process.env.JWT_JEY)
    const user = await userModel.findOne({email:decoded.email})
    req.user = user
    next()
}

export default isLoggedIn