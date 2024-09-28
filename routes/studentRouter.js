import {Router} from "express"
const router = Router()
import {createStudent,readStudent,deleteStudent} from "../controllers/studentController.js"

router.post("/create",createStudent)

router.get("/read",readStudent)

router.delete("/delete/:id",deleteStudent)

export default router