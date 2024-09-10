const express = require("express")
const router = express.Router()
const {createUser,deleteUser,updateUser} = require("../controllers/userController")

router.get("/", (req, res) => {
    res.json({message:"this is user page"})
})

router.post("/create/:orgId",createUser)

router.delete("/delete/:id",deleteUser)

router.put("/update/:id",updateUser)

module.exports = router