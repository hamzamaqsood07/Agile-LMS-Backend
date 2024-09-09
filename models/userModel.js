const mongoose = require("mongoose")

const userModel = mongoose.Schema({
    image:Buffer,
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        match:/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["male","female","others"],
        required:true
    },
    idCardNo:{
        type:String,
        match: /^[0-9]+$/,
        minlength: 13,  
        maxlength: 13,
        required:true
    },
    phone:{
        type:String,
        match:/^[0-9]+$/,
        minlength: 11,  
        maxlength: 11,
        required:true
    },
    role:{
        type:String,
        enum:["admin","frontdesk"],
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
    }
})

module.exports = mongoose.model("user",userModel)