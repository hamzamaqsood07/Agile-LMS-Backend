const mongoose = require("mongoose")

const studentModel = mongoose.Schema({
    image:Buffer,
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        email:true,
        required:()=>{
            if(this.organization.instituteType==="college"||this.organization.instituteType==="university")
            {
                return true
            }
            return false
        }
    },
    familyNo:{
        type:Number,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    motherName:{
        type:String,
        required:true
    },
    fatherEmail:{
        type:String,
        email:true,
        required:true
    },
    motherEmail:{
        type:String,
        email:true,
        required:true
    },
    fatherMobile:{
        type:String,
        match:/^[0-9]+$/,
        length:11,
        required:true
    },
    motherMobile:{
        type:String,
        match:/^[0-9]+$/,
        length:11,
        required:true
    },
    bloodGroup:{
        type:String,
        enum:["A+","A-","B+","B-","AB+","AB-","O+","O-"],
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
    bFormNo: {
        type: String,
        required: true,
        match: /^[0-9]+$/,
        length: 13,
        unique: true,
    },
    gender:{
        type:String,
        enum:["male","female","others"],
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    fatherCnic:{
        type:String,
        match: /^[0-9]+$/,
        length: 13,
        required:true
    },
    motherCnic:{
        type:String,
        match: /^[0-9]+$/,
        length: 13,
        required:true
    },
    admissionDate:{
        type:Date,
        default:Date.now(),
        required:true
    },
    identificationMark:String,
    status:{
        type:String,
        enum:["active","left","struck","graduated"],
        required:true
    },
    statusDate:{
        type:Date,
        default:Date.now(),
        required:true
    },
    class:{
        type:String,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now(),
        required:true
    },
    updatedDate:{
        type:Date,
        default:Date.now(),
        required:true
    },
    organization:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"organization",
        required:true
    },
    postalCode:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("student",studentModel)