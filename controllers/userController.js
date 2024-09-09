const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const generateToken = require("../utils/generateToken")
const organizationModel = require("../models/organizationModel")

module.exports.createUser =  async (req, res) => {
    try {
        const { name, email, password, phone, gender, idCardNo, role, createdAt, updatedAt } = req.body
        const organizationId = req.params.id
        const user = await userModel.findOne({ email })
        if (user) return res.status(409).json({ message: "User already exist" })

        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(password, salt)

        const createdUser = await userModel.create({ name, email,password: hash,gender,idCardNo,phone,role,organization: organizationId,createdAt,updatedAt })

        const organization = await organizationModel.findOne({_id:organizationId})
        if(!organization) return res.status(404).json({message:"Organization Not Found"})

        organization.user.push(createdUser._id)
        await organization.save()
        
        const token = generateToken(createdUser)
        res.cookie("token",token)
        res.status(201).json({createdUser})
    } catch (err) {
        res.status(500).json({message:err.message})
    }
}