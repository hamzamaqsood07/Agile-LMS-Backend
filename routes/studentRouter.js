const express = require("express")
const router = express.Router()
const { createStudent,readStudent } = require("../controllers/studentController")

router.post("/create",createStudent)

router.get("/read",readStudent)

module.exports = router