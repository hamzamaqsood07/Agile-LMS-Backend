import {Schema,model} from "mongoose"

const organizationModel = Schema({
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
    estimatedNoOfStudents:String,
    instituteType:{
        type:String,
        enum:["school","college","university","academy"],
        required:true
    },
    students:[{
        type:Schema.Types.ObjectId,
        ref:"students",
        default:[],
    }],
    users:[
        {
            type:Schema.Types.ObjectId,
            ref:"users",
            default:[],
        }
    ]
},{
    timestamps: true
})

export default model("organizations",organizationModel)