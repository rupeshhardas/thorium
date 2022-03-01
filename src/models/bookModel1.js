const mongoose = require('mongoose');

const bookSchema1 = new mongoose.Schema({
    bookName: String,
    authorName: String,
    year:String,
    price:String,
    Sales:Number,
    pages:Number
}, { timestamps: true})


module.exports = mongoose.model("book1" , bookSchema1)