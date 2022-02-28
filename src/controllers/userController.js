


const UserModel=require("../models/userModel.js")

const CreateBook= async function(req, res) {
    let data = req.body
    let BooksData= await UserModel.create(data)
    res.send({Books: BooksData}) 
}

const getBookData = async function (req, res) {
    let allbooks = await UserModel.find()
    res.send({Books: allbooks})
}

module.exports.CreateBook= CreateBook
module.exports.getBookData= getBookData
