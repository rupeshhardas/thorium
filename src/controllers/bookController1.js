const bookModel = require("../models/bookModel")
const bookModel1= require("../models/bookModel1")





const createBook1 = async function(req, res){
    let data1=req.body
    let saveData1= await bookModel1.create(data1)
    res.send({books: saveData1})

}


const bookList = async function(req, res) {
    let alldata1= await bookModel1.find().select({bookName: 1, authorName: 1, _id: 0})
    res.send({books: alldata1})
}

const getBookslnyear = async function(req, res) {
    let alldata2 = req.query
    let alldata3 = await bookModel1.find({ year: alldata2})
    res.send({books: alldata3})
}

const getINRBooks = async function(req, res) {
    let alldata4= await bookModel1.find({
        $or:[ {price : "rs 100"}, {price : "rs 300"}, {price : "rs 500"}]
    })
        res.send({books: alldata4})
    
}

const getRandombooks = async function(req, res) {
    let alldata5 = await bookModel1.find({pages: {$gt: 500}})
    res.send({books: alldata5})
}


module.exports.createBook1=createBook1
module.exports.bookList=bookList
module.exports.getBookslnyear=getBookslnyear
module.exports.getINRBooks=getINRBooks
module.exports.getRandombooks=getRandombooks