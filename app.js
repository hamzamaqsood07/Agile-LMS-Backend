import express,{json} from "express"
const server = express()
const port = 3000
import cors from "cors"
import indexRouter from "./routes/index.js"
import userRouter from "./routes/userRouter.js"
import organizationRouter from "./routes/organizationRouter.js"
import studentRouter from "./routes/studentRouter.js"
import cookieParser from "cookie-parser"

import "dotenv/config";

import "./config/mongooseConnection.js"

server.use(cookieParser())
server.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}))
server.use(json())


server.use("/",indexRouter)
server.use("/users",userRouter)
server.use("/organization",organizationRouter)
server.use("/student",studentRouter)

server.listen(port,()=>{
    console.log("Exapmle server is running on port "+port)
})