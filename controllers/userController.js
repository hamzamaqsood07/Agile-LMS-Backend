import userModel from "../models/userModel.js"
import {genSalt,hash as _hash} from "bcrypt"
import generateToken from "../utils/generateToken.js"
import orgModel from "../models/organizationModel.js"

export async function createUser(req, res) {
    try {
        const { name, email, password, phone, gender, idCardNo, role, createdAt, updatedAt } = req.body
        const organizationId = req.params.orgId
        const user = await userModel.findOne({ email })
        if (user) return res.status(409).json({ message: "User already exist" })

        const salt = await genSalt(12)
        const hash = await _hash(password, salt)

        const createdUser = await userModel.create({ name, email, password: hash, gender, idCardNo, phone, role, organization: organizationId, createdAt, updatedAt })

        const organization = await orgModel.findOne({ _id: organizationId })
        if (!organization) return res.status(404).json({ message: "Organization Not Found" })

        organization.users.push(createdUser._id)
        await organization.save()

        const token = generateToken(createdUser)
        res.cookie("token", token)
        res.status(201).json({ message: "User created successfully" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export async function deleteUser(req, res) {
    try {
        const id = req.params.id
        const user = await userModel.findOne({ _id: id })
        if (!user) return res.status(404).send({ message: "User Not Found" })

        const organizationId = user.organization.toString()
        const organization = await orgModel.findOne({ _id: organizationId })
        if (!organization) return res.status(404).json({ message: "Organization Not Found" })

        const index = organization.users.indexOf(id)
        organization.users.splice(index, 1)
        await organization.save()
        await userModel.deleteOne({ _id: id })
        res.status(200).json({ message: "User delted Successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function updateUser(req, res) {
    try {
        const id = req.params.id 
        const user = await userModel.findByIdAndUpdate(id, { ...req.body }, { runValidators: true, new: true })
        if(user==null) return res.status(404).json({message:"User Not Found"})
        res.status(200).json({message:"User updated successfully"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}