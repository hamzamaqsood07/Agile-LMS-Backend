const express = require("express")
const router = express.Router()
const {createUser,deleteUser} = require("../controllers/userController")

router.get("/", (req, res) => {
    res.json({message:"this is user page"})
})

router.post("/create/:id",createUser)

router.delete("/delete/:id",deleteUser)

module.exports = router