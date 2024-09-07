const mongoose = require("mongoose")

const userModel = mongoose.Schema({
    image:Buffer,
    name:{
        type:String,
        requierd:true
    },
    email:{
        type:String,
        email:true,
        requierd:true
    },
    password:{
        type:String,
        requierd:true
    },
    gender:{
        type:String,
        enum:["male","female","others"],
        requierd:true
    },
    idCardNo:{
        type:String,
        match: /^[0-9]+$/,
        length: 13,
        required:true
    },
    phone:{
        type:String,
        match:/^[0-9]+$/,
        length:11,
        requierd:true
    },
    role:{
        type:String,
        enum:["admin","frontdesk"],
        requierd:true
    },
    organization:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"organization",
        requierd:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        requierd:true
    },
    updatedAt:{
        type:Date,
        default:Date.now(),
        requierd:true
    }
})

module.exports = mongoose.model("user",userModel)