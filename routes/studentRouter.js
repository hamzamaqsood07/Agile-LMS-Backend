const express = require("express")
const router = express.Router()
const { createStudent } = require("../controllers/studentController")

router.get("/",(req,res)=>{
    res.send("this is student page")
})

router.post("/create",createStudent)

module.exports = router