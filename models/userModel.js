const mongoose = require("mongoose")

const userModel = mongoose.Schema({
    image:Buffer,
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        email:true,
        required:true
    },
    phone:{
        type:String,
        match:/^[0-9]+$/,
        length:11,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    organization:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"organization",
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true
    },
    updatedAt:{
        type:Date,
        default:Date.now(),
        required:true
    },
    gender:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("user",userModel)