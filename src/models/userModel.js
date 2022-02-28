const mongoose = require('mongoose');

const userSchema= new mongoose.Schema( {
    Bookname: String,
    Authorname: String,
    Year: Number,
    Category: String,
},{ timestamps: true });



modules.exports = mongoose.model('users' , userSchema)  
