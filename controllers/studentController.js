import studentModel from "../models/studentModel.js"
import userModel from "../models/userModel.js"
import orgModel from "../models/organizationModel.js"

export async function createStudent(req, res) {
    try {
        const { country, state, city, street, postalCode, ...rest } = req.body
        const student = await studentModel.findOne({ rollNo: req.body.rollNo })
        if (student) return res.status(409).json({ message: "Student already exist with this roll no" })

        // const userEmail =req.user.email
        const user = await userModel.findOne({ email: 'baair@gmail.com' })
        const orgId = user.organization.toString()

        const createdStudent = await studentModel.create({
            ...rest,
            organization: orgId,
            address: {
                country,
                state,
                city,
                street,
                postalCode
            }
        })

        const organization = await orgModel.findOne({ _id: orgId })
        organization.students.push(createdStudent._id.toString())
        await organization.save()
        res.status(201).json({ message: "Student is created" })
    } catch (error) {
        if (error.code === 11000 && error.keyValue) {
            const field = Object.keys(error.keyValue)[0]
            const value = error.keyValue[field]
            res.status(409).json({ message: `Student with ${field}:${value} already exists` });
        } else {
            res.status(500).json({ message: error.message })
        }
    }
}

export async function readStudent(req, res) {
    try {
        // const id = req.user.id
        const user = await userModel.findOne({ _id: "66f83f36e9f7de0c55b433e6" })
        const orgId = user.organization.toString()
        const organization = await orgModel.findOne({ _id: orgId }).populate("students")
        res.status(200).send(organization.students)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function deleteStudent(req, res) {
    try {
        const id = req.params.id
        const student = await studentModel.findOne({ _id: id })
        if (!student) return res.status(404).json({ message: "Student not found" })

        // const userEmail =req.user.email
        const user = await userModel.findOne({ email: 'baair@gmail.com' })
        const orgId = user.organization.toString()
        const organization = await orgModel.findOne({ _id: orgId })
        const index = organization.students.indexOf(id)
        organization.students.splice(index,1)
        await organization.save()

        await studentModel.deleteOne({_id:id})
        res.status(200).json({ message: "Student delted Successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}