import {Schema,model} from "mongoose"

const studentSchema = new Schema({
    image:Buffer,
    name:{
        type:String,
        required:true
    },
    rollNo:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        match:/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    },
    familyNo:Number,
    fatherName:{
        type:String,
        required:true
    },
    motherName:String,
    fatherEmail:{
        type:String,
        match:/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    },
    motherEmail:{
        type:String,
        match:/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    },
    fatherMobile:{
        type:String,
        match:/^[0-9]+$/,
        minlength: 11,  
        maxlength: 11
    },
    motherMobile:{
        type:String,
        match:/^[0-9]+$/,
        minlength: 11,  
        maxlength: 11
    },
    bloodGroup:{
        type:String,
        enum:["A+","A-","B+","B-","AB+","AB-","O+","O-"]
    },
    address:{
        country:String,
        state:String,
        city:String,
        street:String,
        postalCode:String
    },
    cnic: {
        type: String,
        required: true,
        match: /^[0-9]+$/,
        minlength: 13,  
        maxlength: 13,
        unique: true,
    },
    gender:{
        type:String,
        enum:["male","female","others"]
    },
    dob:Date,
    fatherCnic:{
        type:String,
        match: /^[0-9]+$/,
        minlength: 13,  
        maxlength: 13,
        required:true
    },
    motherCnic:{
        type:String,
        match: /^[0-9]+$/,
        minlength: 13,  
        maxlength: 13,
    },
    admissionDate:{
        type:Date,
        default:Date.now()
    },
    identificationMark:String,
    status:{
        type:String,
        enum:["active","left","struck","graduated"]
    },
    statusDate:{
        type:Date,
        default:Date.now()
    },
    class:String,
    section:String,
    // createdDate:{
    //     type:Date,
    //     default:Date.now()
    // },
    // updatedDate:{
    //     type:Date,
    //     default:Date.now()
    // },
    organization:{
        type:Schema.Types.ObjectId,
        ref:"organization"
    }
},{
    timestamps:true
})

const studentModel = new model("students",studentSchema);
export default studentModel;