const express = require("express")
const server = express()
const port = 3000
const cors = require("cors")
const indexRouter = require("./routes/index")
const userRouter = require("./routes/userRouter")
const organizationRouter = require("./routes/organizationRouter")
const studentRouter = require("./routes/studentRouter")
const cookieParser = require("cookie-parser")
const db = require("./config/mongooseConnection")

require("dotenv").config()

server.use(cookieParser())
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use("/",indexRouter)
server.use("/user",userRouter)
server.use("/organization",organizationRouter)
server.use("/student",studentRouter)

server.listen(port,()=>{
    console.log("Exapmle server is running on port "+port)
})