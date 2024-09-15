const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const generateToken = require("../utils/generateToken")

module.exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) return res.status(401).json({ message: "Invalid username or password" });

        const result = await bcrypt.compare(password, user.password)
        if (!result) return res.status(401).json({ message: "Invalid username or password" });

        const token = generateToken(user)
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production'?"None":"Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        res.status(200).json({message:""})
    } catch (error){
        res.status(500).json({ message: error.message })
    }

}
module.exports.logoutUser = (req, res) => {
    try {
        res.cookie("token", "")
        res.status(200).json({message:""})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}