const mongoose = require("mongoose")

 mongoose.connect(process.env.MONGO_URI/"lms")

module.exports = mongoose.connection

