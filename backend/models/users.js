const mongoose=require("mongoose")
const ItemSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    mobile:Number,
    address:{
        type:String,
    },
    gender:{
        type:String,
    },

})
module.exports=mongoose.model("Item",ItemSchema)