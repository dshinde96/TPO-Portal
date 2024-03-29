const mongoose=require('mongoose');
const {Schema}=mongoose;
const User_stu=new Schema({
    name:{
        type:String,
        required:true
    },
    reg_no:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    mob_no:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        default:"Student"
    },
    dob:{
        type:Date,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Education:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Education"
    },
    Experience:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Experience"
    },
    Project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    },
    CompanyName:[{
        type:String,
        required:true
    }],
    placed:{
        type:Boolean,
        required:true
    },
    applicationHistory:[{
        DriveId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Drive",
            required:true
        },
        ApplicationId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Application",
            required:true
        },
        status:{
            type:String,
            required:true
        }
    }]
});

module.exports=mongoose.model("User_stu",User_stu);