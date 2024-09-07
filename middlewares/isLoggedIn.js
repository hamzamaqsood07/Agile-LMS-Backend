const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")

const isLoggedIn = async(req,res,next)=>{
    if(!req.cookies.token){
        return res.status(401).send("unauthorized user")
    }
    const token = req.cookies.token
    const decoded = jwt.verify(token,process.env.JWT_JEY)
    const user = await userModel.findOne({email:decoded.email})
    req.user = user
    next()
}

module.exports = isLoggedIn