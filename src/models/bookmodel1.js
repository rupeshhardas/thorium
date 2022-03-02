const mongoose=require('mongoose')

const createbookschema= new mongoose.Schema({

    name:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Author1"
    },
    price:String,
    ratings:Number,
    publisher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"publish1" 
    }


})