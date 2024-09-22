import {Router} from "express"
const router = Router()
import {loginUser,logoutUser} from '../controllers/authController.js'

router.get("/",(req,res)=>{
    res.send("hello world")
})

router.post("/login",loginUser)

router.post("/logout",logoutUser)

export default router