const mongoose=require('mongoose')

const createbookschema= new mongoose.Schema({

    name:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Author1"
    },
    price:Number,
    ratings:Number,
    publisher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"publish2" 
    },
    isHardcover:{
        type: Boolean,
        default: false
    }


},{timestamps: true})


module.exports = mongoose.model('allbooks', createbookschema)
