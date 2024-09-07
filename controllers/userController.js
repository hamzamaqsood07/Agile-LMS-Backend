const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const generateToken = require("../utils/generateToken")

module.exports.createUser =  async (req, res) => {
    try {
        const { name, email, password, phone, gender, idCardNo, role, createdAt, updatedAt } = req.body
        const organization = req.params.id
        const user = await userModel.findOne({ email })
        if (user) return res.status(409).json({ message: "User already exist" })

        bcrypt.genSalt(12, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) {
                    return res.status(500).json({ message: err.message })
                }
                const user = await userModel.create({ name, email,password: hash,gender,idCardNo,phone,role,organization,createdAt,updatedAt })
                await user.save()
                const token = generateToken(user)
                res.cookie("token",token)
                res.status(201).json({user})
            })
        })
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}