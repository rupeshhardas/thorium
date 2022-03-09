const mongoose = require('mongoose');

const candidateSchema= new mongoose.Schema({

    firstName: String,
    lastName: String,
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDelete:{
        type:Boolean,
        default:false
    }
    
}, { timestamps: true });

module.exports = mongoose.model('Candidate', candidateSchema)


