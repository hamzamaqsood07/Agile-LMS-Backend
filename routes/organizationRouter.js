import {Router} from "express"
const router = Router()
import {createOrganization} from "../controllers/organizationController.js"

router.get("/",(req,res)=>{
    res.send("this is organization page")
})

router.post("/create",createOrganization)

export default router