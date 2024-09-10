const mongoose = require("mongoose")

const organizationModel = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        country:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        street:{
            type:String,
            required:true
        },
        postalCode:{
            type:String,
            required:true
        }
    },
    phone:{
        type:String,
        match:/^[0-9]+$/,
        minlength: 11,  
        maxlength: 11,
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
    estimatedNoOfStudents:String,
    instituteType:{
        type:String,
        enum:["school","college","university","academy"],
        required:true
    },
    students:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        default:[],
    }],
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            default:[],
        }
    ]
})

module.exports = mongoose.model("organization",organizationModel)