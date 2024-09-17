const studentModel = require("../models/studentModel")
const userModel = require("../models/userModel")
const organizationModel = require("../models/organizationModel")

module.exports.createStudent = async (req, res) => {
    try{
    const { country, state, city, street, postalCode, ...rest } = req.body
    const student = await studentModel.findOne({ rollNo: req.body.rollNo })
    if (student) return res.status(409).json({ message: "Student already exist with this roll no" })

    const createdStudent = await studentModel.create({
        ...rest,
        address: {
            country,
            state,
            city,
            street,
            postalCode
        }
    })
    const userEmail =req.user.email
    const user = await userModel.findOne({email:userEmail})
    const organizationId = user.organization.toString()
    const organization = await organizationModel.findOne({_id:organizationId})
    organization.students.push(createdStudent._id.toString())
    await organization.save()
    res.status(201).json({message:"Student is created"})
    }catch(error){
        if (error.code === 11000 && error.keyValue) {  
            const field = Object.keys(error.keyValue)[0]
            const value = error.keyValue[field]
            res.status(409).json({ message: `Student with ${field}:${value} already exists` });
        } else {
            res.status(500).json({message:error.message})     
        }
    }
}