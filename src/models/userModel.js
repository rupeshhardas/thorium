const mongoose = require('mongoose');

const userSchema= new mongoose.Schema( {
    Bookname: String,
    Authorname: String,
    Year: Number,
    Category: String,
},{ timestamps: true });



module.exports = mongoose.model('users' , userSchema)  
