const Bookmodel1 = require("../models/bookmodel1")
const Authormodel = require("../models/authormodel")
const authormodel = require("../models/authormodel")
const bookModel1 = require("../models/bookmodel1")
const res = require("express/lib/response")

const createNewAthour= async function(req,res){ 
    let Data=req.body
    let savedata=await authormodel.create(Data)
    res.send({Authors: savedata})
}

const createNewBook = async function(req, rea){
    let Data2=req.body
    let savealldata=await bookModel1.create(Data2)
    res.send({Books: savealldata})

    
}





module.exports.createNewAthour=createNewAthour
module.exports.createNewBook=createNewBook