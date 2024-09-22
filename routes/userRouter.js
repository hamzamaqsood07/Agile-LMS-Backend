import {Router} from "express"
const router = Router()
import {createUser,deleteUser,updateUser} from "../controllers/userController.js"

router.get("/", (req, res) => {
    res.json({message:"this is user page"})
})

router.post("/create/:orgId",createUser)

router.delete("/delete/:id",deleteUser)

router.put("/update/:id",updateUser)

export default router