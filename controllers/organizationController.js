import orgModel from "../models/organizationModel.js";


export async function createOrganization(req, res) {
    try {
        const { name, country, state, city, street, postalCode, phone, createdAt, updatedAt, instituteType } = req.body
        const organization = await orgModel.create({
            name,
            address: {
                country,
                state,
                city,
                street,
                postalCode
            },
            phone,
            createdAt,
            updatedAt,
            instituteType
        });
        res.status(201).json({ message:"Organization created" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}