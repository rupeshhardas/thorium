const mongoose = require('mongoose');
// const objectId = mongoose.Schema.Types.ObjectId 

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,

//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
// }, { timestamps: true });



const userSchema = new mongoose.Schema({

    
        
        name:String,
        balance:{
            type:Number,
            default:100
        }, // Default balance at user registration is 100
        address:String,
        age: Number,
         gender:{
             type:String,
             enum:["Male","Female","Others"]
         }, // Allowed values are - “male”, “female”, “other”
        isFreeAppUser: {
            type:Boolean,
            default:false
          } // Default false value.
 
        
},{timestamps:true})

module.exports = mongoose.model('NewUser', userSchema) //users



// String, Number
// Boolean, Object/json, array