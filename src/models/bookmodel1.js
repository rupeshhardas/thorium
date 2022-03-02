const mongoose = require('mongoose');

const bookSchema1 = new mongoose.Schema({
    name:String,
    author_id:Number,
    price:String,
    ratings:Number,


}, { timestamps: true})


module.exports = mongoose.model('createbook', bookSchema1);