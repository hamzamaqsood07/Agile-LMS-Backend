import {Router} from "express"
import isLoggedIn from "../middlewares/isLoggedIn.js"
const router = Router()
import {createStudent,readStudent,deleteStudent,updateStudent} from "../controllers/studentController.js"

router.post("/create",isLoggedIn,createStudent)

router.get("/read",isLoggedIn,readStudent)

router.delete("/delete/:id",isLoggedIn,deleteStudent)

router.put("/update/:id",isLoggedIn,updateStudent)

export default router