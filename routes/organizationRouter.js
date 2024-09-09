const express = require("express")
const router = express.Router()
const {createOrganization} = require("../controllers/organizationController")

router.get("/",(req,res)=>{
    res.send("this is organization page")
})

router.post("/create",createOrganization)

module.exports = router