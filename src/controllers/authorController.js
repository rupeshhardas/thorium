const AuthorModel= require("../models/authorModel")
const publishermodel= require("../models/publishermodel")
const bookModel=require("../models/bookmodel1")
const bookmodel1 = require("../models/bookmodel1")
const authormodel = require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const createPublisher= async function(req, res) {
    let publishdata = await publishermodel.create(req.body)
    res.send({data: publishdata})
}



const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    //validation a
    if(!authorId) return res.send('The request is not valid as the author details are required.')

    //validation b
    let author = await AuthorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')

    //validation c
    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    //validation d
    let publisher = await publishermodel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}

const updatebook = async function(req,res) {

let publisherid= await publishermodel.find({name:{$in:["HarperCollins","Penguin"]}}).select({_id:1})
let listOfBook=await bookmodel1.updateMany(
    {publisher:{$in:publisherid}},{$set:{isHardcover:true}},{new:true}
)
let authorword=await authormodel.find({rating:{$gt:3.5}}).select({_id:1})
let updateprice=await bookmodel1.updateMany({
    author:{$in:authorword}},{$inc:{price:+10}},{new:true})
    res.send(updateprice)
}









module.exports.updatebook=updatebook
module.exports.createAuthor= createAuthor
module.exports.createPublisher=createPublisher
module.exports.createBook= createBook
module.exports.getBooks= getBooks
