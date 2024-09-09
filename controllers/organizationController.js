const organizationModel = require("../models/organizationModel")


module.exports.createOrganization = async (req, res) => {
    try {
        const { name, country, state, city, street, postalCode, phone, createdAt, updatedAt, instituteType } = req.body
        const organization = await organizationModel.create({
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
        res.status(201).json({ organization })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}