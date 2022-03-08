const mongoose = require('mongoose')
const objectId=mongoose.Schema.Types.ObjectId 


const orderSchema = new mongoose.Schema({

    
userId: {
    type:objectId,
    ref:"NewUser"
},
productId:{
    type:objectId,
    ref:"Newproduct"
},
amount: Number,
isFreeAppUser:Boolean, 



})

module.exports = mongoose.model('neworder', orderSchema)