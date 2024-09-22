import {Router} from "express"
const router = Router()
import {createStudent,readStudent} from "../controllers/studentController.js"

router.post("/create",createStudent)

router.get("/read",readStudent)

export default router