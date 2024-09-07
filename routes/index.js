const express = require("express")
const router = express.Router()
const {loginUser,logoutUser} = require('../controllers/authController')

router.get("/",(req,res)=>{
    res.send("hello world")
})

router.post("/login",loginUser)

router.get("/logout",logoutUser)

module.exports = router