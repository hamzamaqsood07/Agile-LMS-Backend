const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const generateToken = require("../utils/generateToken")

module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (!user) {
       return  res.json({message:"Incorrect username or password"})
    }
    bcrypt.compare(password, user.password, (err, result) => {
        if (!result) {
            return res.json({message:"Incorrect username or password"})
        }
        const token = generateToken(user)
        res.cookie("token",token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7*24 * 60 * 60 * 1000 
        })
        res.json({message:""})
    })

}
module.exports.logoutUser = (req,res)=>{
    res.cookie("token","he")
    res.json({message:"nice"})
}