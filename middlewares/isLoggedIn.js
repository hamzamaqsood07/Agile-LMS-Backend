import {verify} from "jsonwebtoken"
import {findOne} from "../models/userModel"

const isLoggedIn = async(req,res,next)=>{
    if(!req.cookies.token){
        return res.status(401).send("unauthorized user")
    }
    const token = req.cookies.token
    const decoded = verify(token,process.env.JWT_JEY)
    const user = await findOne({email:decoded.email})
    req.user = user
    next()
}

export default isLoggedIn